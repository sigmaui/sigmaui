import type { StyleFn } from '@sigma-ui-kit/theme';

import type { TextProps, SematicName } from './types';

const styleFn: StyleFn<TextProps, SematicName> = props => {
  const { tokens } = props;
  return {
    root: {
      root: {
        fontFamily: tokens.fonts,
        fontStyle: 'normal',
        padding: 0,
        margin: 0,
      },
      variants: [
        {
          props: props => props.variant === 'text-xxs',
          style: {
            fontSize: tokens.fontSizes['text-xxs'],
            lineHeight: tokens.lineHeights['text-xxs'],
          },
        },
        {
          props: props => props.variant === 'text-xs',
          style: {
            fontSize: tokens.fontSizes['text-xs'],
            lineHeight: tokens.lineHeights['text-xs'],
          },
        },
        {
          props: props => props.variant === 'text-sm',
          style: {
            fontSize: tokens.fontSizes['text-sm'],
            lineHeight: tokens.lineHeights['text-sm'],
          },
        },
        {
          props: props => props.variant === 'text-md',
          style: {
            fontSize: tokens.fontSizes['text-md'],
            lineHeight: tokens.lineHeights['text-md'],
          },
        },
        {
          props: props => props.variant === 'text-lg',
          style: {
            fontSize: tokens.fontSizes['text-lg'],
            lineHeight: tokens.lineHeights['text-lg'],
          },
        },
        {
          props: props => props.variant === 'text-xl',
          style: {
            fontSize: tokens.fontSizes['text-xl'],
            lineHeight: tokens.lineHeights['text-xl'],
          },
        },
        {
          props: props => props.variant === 'display-xs',
          style: {
            fontSize: tokens.fontSizes['display-xs'],
            lineHeight: tokens.lineHeights['display-xs'],
          },
        },
        {
          props: props => props.variant === 'display-sm',
          style: {
            fontSize: tokens.fontSizes['display-sm'],
            lineHeight: tokens.lineHeights['display-sm'],
          },
        },
        {
          props: props => props.variant === 'display-md',
          style: {
            fontSize: tokens.fontSizes['display-md'],
            lineHeight: tokens.lineHeights['display-md'],
          },
        },
        {
          props: props => props.variant === 'display-lg',
          style: {
            fontSize: tokens.fontSizes['display-lg'],
            lineHeight: tokens.lineHeights['display-lg'],
          },
        },
        {
          props: props => props.variant === 'display-xl',
          style: {
            fontSize: tokens.fontSizes['display-xl'],
            lineHeight: tokens.lineHeights['display-xl'],
          },
        },
        {
          props: props => props.variant === 'display-2xl',
          style: {
            fontSize: tokens.fontSizes['display-2xl'],
            lineHeight: tokens.lineHeights['display-2xl'],
          },
        },
        {
          props: props => props.color === 'strong',
          style: {
            color: tokens.colors.text.strong,
          },
        },
        {
          props: props => props.color === 'weak',
          style: {
            color: tokens.colors.text.weak,
          },
        },
        {
          props: props => props.color === 'disabled',
          style: {
            color: tokens.colors.text.disabled,
          },
        },
        {
          props: props => props.color === 'brand',
          style: {
            color: tokens.colors.text.brand,
          },
        },
        {
          props: props => props.color === 'error',
          style: {
            color: tokens.colors.text.error,
          },
        },
        {
          props: props => props.color === 'warning',
        },
        {
          props: props => props.color === 'success',
          style: {
            color: tokens.colors.text.success,
          },
        },
        {
          props: props => props.color === 'information',
          style: {
            color: tokens.colors.text.information,
          },
        },
        {
          props: props => props.color === 'discovery',
          style: {
            color: tokens.colors.text.discovery,
          },
        },
        {
          props: props => props.color === 'inverse',
          style: {
            color: tokens.colors.text.inverse,
          },
        },
        {
          props: props => props.color === 'whiteFixed',
          style: {
            color: tokens.colors.text.whiteFixed,
          },
        },
      ],
    },
  };
};

export default styleFn;
