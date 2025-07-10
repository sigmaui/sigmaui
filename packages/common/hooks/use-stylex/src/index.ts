import * as stylex from '@stylexjs/stylex';
import type { Theme } from '@stylexjs/stylex';

import { VariantEnum, type Tailwind, type Variant } from './types';

type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

type StyleXProps = Writable<ReturnType<typeof stylex.props>>;

export type {
  Tailwind,
  Variant,
  StyleXProps
}

type UseStyleXParams = {
  isWithAttrs?: boolean;
  isHash?: boolean;
  tailwindStyles?: any;
  theme?: Theme<any, any>
};

export type ClassValue = ClassArray | ClassDictionary | Tailwind | Variant | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ((...args: Parameters<T[K]>) => {
    [key: string]: string
  }) : string;
} & {
  getProps: (...args: (keyof T | T[keyof T] | ClassValue)[]) => any;
  getClass: (...args: (keyof T | T[keyof T] | ClassValue)[]) => string;
};

export function isVariant(value: string): value is VariantEnum {
  return Object.values(VariantEnum).includes(value as VariantEnum);
}

export const useStyleX = <T extends Record<string, any>>(xStyles: T, params: UseStyleXParams = {}): {
  classes: Classes<T>
} => {
  const {
    isWithAttrs = false,
    isHash = false,
    tailwindStyles,
    theme
  } = params;

  const classKey = isWithAttrs ? 'class' : 'className';
  const funcKey = isWithAttrs ? 'attrs' : 'props';

  const classes = {} as Partial<Classes<T>>;

  if (isHash) {
    Object.keys(xStyles).forEach((key) => {
      const value = xStyles[key];

      if (typeof value === 'function') {
        (classes as any)[key as keyof T] = (...args: any[]) => {
          return (stylex as any)[funcKey](value(...args));
        };
      } else {
        const props = (stylex as any)[funcKey](value);
        classes[key as keyof T] = props[classKey];
      }
    });
  }

  const getProps = ((...args: (keyof T | T[keyof T] | Tailwind)[]): StyleXProps => {
    const styles: any = [];
    let classStr = '';

    const getStyles = (args: any[]) => {
      for (const arg of args) {
        if (typeof arg === 'string') {
          const values = tailwindStyles?.[arg as Tailwind] ?? xStyles[arg];

          if (values) {
            styles.push(values);
          } else {
            if (!isVariant(arg)) {
              if (classStr) {
                classStr += ' ';
              }

              classStr += arg;
            }
          }
        } else if (Array.isArray(arg)) {
          getStyles(arg);
        } else {
          styles.push(arg);
        }
      }
    }

    getStyles(args);

    let props: StyleXProps;

    if (theme) {
      props = (stylex as any)[funcKey](theme, ...styles)
    } else {
      props = (stylex as any)[funcKey](...styles)
    }

    if (classStr) {
      props.className = props[classKey] ? `${classStr} ${props[classKey]}` : `${classStr}`
    }

    return props;
  }) as Classes<T>['getProps'];

  classes.getClass = ((...args: (keyof T | T[keyof T] | ClassValue)[]): string => {
    const props = getProps(...args);
    return props[classKey];
  }) as Classes<T>['getClass'];

  classes.getProps = getProps;

  return {
    classes: classes as Classes<T>
  }
};

export default useStyleX