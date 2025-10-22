'use client';

import React from 'react';
import deepmerge from 'deepmerge';
import useMicroUI from '@microui-kit/use-micro-ui';

import type { ComponentForwardProps, StyleFn, StylesObject, Theme, Tokens } from './types';
import defaultToken from './defaultToken';
import { getMatchingVariants } from './util';

export interface WithStyleConfig<ComponentBaseProps> {
  prefixCls?: string;
  defaultProps?: Partial<ComponentBaseProps>;
}

export interface WithStyleProps<ClassKeys extends string> {
  _style?:
    | Partial<Record<ClassKeys, StylesObject>>
    | ((props: {
        tokens: Tokens;
        componentCls: string;
      }) => Partial<Record<ClassKeys, StylesObject>>);
  extendStyle?:
    | Partial<Record<ClassKeys, StylesObject>>
    | ((props: {
        tokens: Tokens;
        componentCls: string;
      }) => Partial<Record<ClassKeys, StylesObject>>);
  _class?: Partial<Record<ClassKeys, string>>;
  prefixCls?: string;
}

export default function withStyles<ComponentBaseProps, ClassKeys extends string>(
  styles: StyleFn<ComponentBaseProps, ClassKeys>,
  config: WithStyleConfig<ComponentBaseProps> = {}
) {
  return function (
    Component: React.ComponentType<ComponentBaseProps & ComponentForwardProps<ClassKeys>>
  ) {
    const Wrapped: React.FC<WithStyleProps<ClassKeys> & ComponentBaseProps> = props => {
      const { _style, _class, extendStyle, prefixCls: componentPrefixCls, ...restProps } = props;

      const { renderer, theme, css } = useMicroUI<Theme>();

      const componentName = Component.displayName || Component.name || 'Component';
      const baseName = componentName.toLowerCase();

      // Get prefixCls
      const prefixCls =
        componentPrefixCls ??
        (config.prefixCls ? `${config.prefixCls}-${baseName}` : `sm-${baseName}`);

      const componentCls = `.${prefixCls}`;

      // Get tokens, componentOverride, componentDefaultProps from theme
      const tokens: Tokens = deepmerge(defaultToken, {
        boxShadows: theme.boxShadows,
        colors: theme.colors,
        fonts: theme.fonts,
        fontSizes: theme.fontSizes,
        fontWeights: theme.fontWeights,
        lineHeights: theme.lineHeights,
        radii: theme.radii,
        zIndices: theme.zIndices,
        icons: theme.icons,
        buttons: theme.buttons,
      });

      const themeStyleOverrides =
        theme.overrideComponents && theme.overrideComponents[componentName]
          ? theme.overrideComponents[componentName].styleOverrides
          : {};
      const themeDefaultProps =
        theme.overrideComponents && theme.overrideComponents[componentName]
          ? theme.overrideComponents[componentName].defaultProps
          : {};

      const mergedProps = {
        ...config.defaultProps,
        ...themeDefaultProps,
        ...restProps,
      };

      // create component styles
      const baseStyles = styles
        ? typeof styles === 'function'
          ? styles({ ...(restProps as ComponentBaseProps), tokens, componentCls })
          : styles
        : {};

      const overrideStyles = themeStyleOverrides
        ? typeof themeStyleOverrides === 'function'
          ? themeStyleOverrides({
              ...(restProps as ComponentBaseProps),
              token: tokens,
              componentCls,
            })
          : themeStyleOverrides
        : {};

      const propsStyles = _style
        ? typeof _style === 'function'
          ? _style({ tokens, componentCls })
          : _style
        : {};
      const propsExtendStyles = extendStyle
        ? typeof extendStyle === 'function'
          ? extendStyle({ tokens, componentCls })
          : extendStyle
        : {};

      const mergedStyles = deepmerge.all<any>([
        baseStyles,
        overrideStyles,
        propsStyles,
        propsExtendStyles,
      ]);

      const mergedVariantStyles = Object.keys(mergedStyles).reduce(
        (acc, key) => {
          if (mergedStyles[key].variants) {
            const { variants, ...rest } = mergedStyles[key];

            const matchedVariants = getMatchingVariants(variants, mergedProps);
            acc[key as ClassKeys] = {
              ...rest,
              ...matchedVariants,
            };
          } else {
            acc[key as ClassKeys] = { ...mergedStyles[key] };
          }
          return acc;
        },
        {} as Record<ClassKeys, string>
      );

      const classes = Object.keys(mergedVariantStyles).reduce(
        (acc, key) => {
          acc[key as ClassKeys] = css(mergedVariantStyles[key as ClassKeys]);
          return acc;
        },
        {} as Record<ClassKeys, string>
      );

      const mergedClass = deepmerge.all([classes, _class || {}], {
        customMerge: () => {
          return (a, b) => {
            if (typeof a === 'string' && typeof b === 'string') {
              return [a, b].filter(Boolean).join(' ');
            }
            return undefined;
          };
        },
      });

      return React.createElement(Component, {
        ...config.defaultProps,
        ...themeDefaultProps,
        ...restProps,
        classes: mergedClass,
        renderer,
        prefixCls,
      });
    };

    Wrapped.displayName = `WithFelaStyles(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
  };
}
