import * as stylex from '@stylexjs/stylex';
import type { Theme } from '@stylexjs/stylex';

import type { Tailwind, Variant } from './types';

export type {
  Tailwind
}

type UseStyleXParams = {
  isWithAttrs?: boolean;
  isHash?: boolean;
  tailwindStyles?: any;
  theme?: Theme<any, any>
};

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ((...args: Parameters<T[K]>) => {
    [key: string]: string
  }) : string;
} & {
  getProps: (...args: (keyof T | T[keyof T] | Tailwind | Tailwind[] | Variant)[]) => any;
  getClass: (...args: (keyof T | T[keyof T] | Tailwind | Tailwind[] | Variant)[]) => string;
};

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

  const getProps = ((...args: (keyof T | T[keyof T] | Tailwind)[]): string => {
    const styles: any = [];

    const getStyles = (args: any[]) => {
      for (const arg of args) {
        if (typeof arg === 'string') {
          styles.push(tailwindStyles?.[arg as Tailwind] ?? xStyles[arg]);
        } else if (Array.isArray(arg)) {
          getStyles(arg);
        } else {
          styles.push(arg);
        }
      }
    }

    getStyles(args);

    if (theme) {
      return (stylex as any)[funcKey](theme, ...styles)
    }

    return (stylex as any)[funcKey](...styles)
  }) as Classes<T>['getProps'];

  classes.getClass = ((...args: (keyof T | T[keyof T] | Tailwind)[]): string => {
    const props: any = getProps(...args);
    return props[classKey];
  }) as Classes<T>['getClass'];

  classes.getProps = getProps;

  return {
    classes: classes as Classes<T>
  }
};

export default useStyleX