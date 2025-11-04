'use client';

import useMicroUI from '@microui-kit/use-micro-ui';

import type { StyleFn, StylesObject, Theme, Tokens } from '../types';
import { resolveStylesVariant } from './util';
import { classnames } from '..';

export interface ComponentBaseProps<SemanticName extends string> extends Object {
  styles?:
    | Partial<Record<SemanticName, StylesObject>>
    | ((tokens: Tokens, componentCls: string) => Partial<Record<SemanticName, StylesObject>>);
  classNames?: Partial<Record<SemanticName, string>>;
  prefixCls?: string;
}

export interface UseDefaultPropsConfig<
  SemanticName extends string,
  ComponentProps extends ComponentBaseProps<SemanticName>,
> {
  props: ComponentProps;
  defaultProps: Partial<ComponentProps>;
  name: string;
  styleFn: StyleFn<ComponentProps, SemanticName>;
}

export default function useDefaultProps<
  SemanticName extends string,
  ComponentProps extends ComponentBaseProps<SemanticName>,
>(
  config: UseDefaultPropsConfig<SemanticName, ComponentProps>
): Omit<ComponentProps, 'styles' | 'classNames'> & {
  classes: Record<SemanticName, string>;
  rootPrefixCls: string;
  prefixCls: string;
  direction: 'ltr' | 'rtl';
} {
  const { props: componentProps, defaultProps, name, styleFn } = config;

  const props = { ...defaultProps, ...componentProps } as any;

  const {
    styles: propStyles,
    classNames: propsClassNames,
    prefixCls,
    ...restComponentProps
  } = props;

  const mergePrefixCls = prefixCls ?? `sm-${name.toLowerCase()}`;
  const componentCls = `.${mergePrefixCls}`;

  const { theme, css, renderer } = useMicroUI<Theme>();
  const { overrideComponents, ...tokens } = theme;

  const overrideComponent =
    overrideComponents && overrideComponents[name]
      ? overrideComponents[name].styleOverrides
      : undefined;

  const resolveBaseStyles = styleFn({ tokens, componentCls, renderer });
  const resolveOverrideStyles = overrideComponent
    ? overrideComponent({
        tokens,
        componentCls,
      })
    : {};

  const resolvedPropsStyles = propStyles
    ? typeof propStyles === 'function'
      ? propStyles(tokens, componentCls)
      : propStyles
    : {};

  const baseStyles = resolveStylesVariant<ComponentProps, SemanticName>(
    resolveBaseStyles,
    resolveOverrideStyles,
    {
      ...props,
      styles: resolvedPropsStyles,
    }
  );

  const classes = Object.keys(baseStyles).reduce(
    (acc, key) => {
      acc[key as SemanticName] = classnames(
        css(baseStyles[key as SemanticName]),
        propsClassNames?.[key as SemanticName]
      );
      return acc;
    },
    {} as Record<SemanticName, string>
  );

  return {
    ...restComponentProps,
    classes,
    prefixCls: mergePrefixCls,
    direction: 'ltr',
    rootPrefixCls: 'sm',
  };
}
