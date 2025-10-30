import type { StyleFn } from '@sigma-ui-kit/theme';

import type { InputProps, SemanticName } from './Input';

const getPlaceholderStyle = (tokens: any) => {
  return {
    '::placeholder': {
      color: tokens.colors.text.disable,
      opacity: 0.5,
    },
    '::-webkit-input-placeholder': {
      color: tokens.colors.text.disable,
      opacity: 0.5,
    },
    '::-moz-placeholder': {
      color: tokens.colors.text.disable,
      opacity: 0.5,
    },
    ':-moz-placeholder': {
      color: tokens.colors.text.disable,
      opacity: 0.5,
    },
  };
};

const getOutlinedStyle = (tokens: any, componentCls: string) => {
  return {
    root: {
      margin: 0,
      borderRadius: tokens.buttons.radii.standard,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: tokens.colors.stroke.strong,
      background: tokens.colors.fill.inverse.hover,
      transition: 'all 0.2s ease-in-out',

      [`&${componentCls}-disabled, &${componentCls}[disabled]`]: {
        borderColor: tokens.colors.stroke.weak,
        background: tokens.colors.fill.disabled,
        color: tokens.colors.text.disabled,
        cursor: 'not-allowed',
      },

      [`&${componentCls}-status-error`]: {
        borderColor: tokens.colors.stroke.error.strong,
      },
      [`&${componentCls}-status-warning`]: {
        borderColor: tokens.colors.stroke.warning.strong,
      },
    },
    hover: {
      borderColor: tokens.colors.stroke.brand.strong,
      [`&${componentCls}-disabled, &${componentCls}[disabled]`]: {
        borderColor: tokens.colors.stroke.weak,
      },
      [`&${componentCls}-status-error`]: {
        borderColor: tokens.colors.stroke.error.strong,
      },
      [`&${componentCls}-status-warning`]: {
        borderColor: tokens.colors.stroke.warning.strong,
      },
    },
    focus: {
      borderColor: tokens.colors.stroke.brand.strong,
      boxShadow: `0 0 0 4px ${tokens.colors.stroke.brand.weak}`,
      outline: 'none',
      [`&${componentCls}-status-error`]: {
        borderColor: tokens.colors.stroke.error.strong,
        boxShadow: `0 0 0 4px ${tokens.colors.stroke.error.weak}`,
      },
      [`&${componentCls}-status-warning`]: {
        borderColor: tokens.colors.stroke.warning.strong,
        boxShadow: `0 0 0 4px ${tokens.colors.stroke.warning.weak}`,
      },
    },
  };
};

const genAllowClearStyle = (tokens: any, componentCls: string) => {
  return {
    [`& ${componentCls}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      fontSize: tokens.icons.size.xs,
      color: tokens.colors.text.disabled,
      verticalAlign: -1,
      cursor: 'pointer',
      opacity: 0,
      transition: `all 0.2s ease-in-out`,
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',

      '&:hover': {
        color: tokens.colors.text.weak,
      },

      [`&${componentCls}-hidden`]: {
        visibility: 'hidden',
      },

      [`&${componentCls}-clear-icon-has-suffix`]: {
        marginRight: tokens.buttons.spacing.standard,
      },
    },
  };
};

export const genBasicInputStyle = (tokens: any) => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  minWidth: 0,
  paddingInline: `calc(${tokens.buttons.paddingHorizontal.standard} - 1px)`,
  paddingBlock: `calc(${tokens.buttons.paddingVertical.standard} - 1px)`,
  color: tokens.colors.text.strong,
  fontFamily: tokens.fonts,
  fontSize: tokens.fontSizes['text-sm'],
  fontWeight: 400,
  lineHeight: tokens.lineHeights['text-sm'],
  transition: 'all 0.2s ease-in-out',

  // // Size
  // '&-lg': {
  //   ...genInputLargeStyle(token),
  // },
  // '&-sm': {
  //   ...genInputSmallStyle(token),
  // },

  // RTL
  // '&-rtl, &-textarea-rtl': {
  //   direction: 'rtl',
  // },
});

export const styleFn: StyleFn<InputProps, SemanticName> = props => {
  const { tokens, componentCls } = props;

  const outlinedStyle = getOutlinedStyle(tokens, componentCls);

  return {
    affixWrapper: {
      root: {
        ...genBasicInputStyle(tokens),
        display: 'inline-flex',
        ...outlinedStyle.root,

        '&::before': {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"',
        },

        '&:hover': {
          ...outlinedStyle.hover,
          [`& ${componentCls}-clear-icon`]: {
            opacity: 1,
          },
        },

        [`&${componentCls}-affix-wrapper-focused`]: {
          ...outlinedStyle.focus,
          [`& ${componentCls}-clear-icon`]: {
            opacity: 1,
          },
        },

        ...genAllowClearStyle(tokens, componentCls),

        [`& > input${componentCls}`]: {
          font: 'inherit',
          border: 'none',
          borderRadius: 0,
          outline: 'none',
          background: 'transparent',
          padding: 0,

          '&[disabled]': {
            background: 'transparent',
          },

          '&:focus': {
            boxShadow: 'none',
            outline: 'none',
          },
        },
        [`& ${componentCls}-prefix, & ${componentCls}-suffix`]: {
          display: 'flex',
          flex: 'none',
          alignItems: 'center',
          color: tokens.colors.text.weak,
          fontSize: tokens.icons.size.sm,

          '& > *:not(:last-child)': {
            marginInlineEnd: tokens.buttons.spacing.standard,
          },
        },

        [`&${componentCls}-disabled`]: {
          [`& ${componentCls}-prefix, & ${componentCls}-suffix`]: {
            color: tokens.colors.text.disabled,
          },
        },
      },
    },
    input: {
      root: {
        ...genBasicInputStyle(tokens),
        ...getPlaceholderStyle(tokens),

        ...outlinedStyle.root,

        '&:hover': {
          ...outlinedStyle.hover,
        },

        '&:focus': {
          ...outlinedStyle.focus,
        },
      },
    },
    prefix: {
      root: {
        marginInlineEnd: tokens.buttons.spacing.standard,
      },
    },

    suffix: {
      root: {
        marginInlineStart: tokens.buttons.spacing.standard,
        [`& ${componentCls}-show-count-has-suffix`]: {
          marginInlineEnd: tokens.buttons.spacing.standard,
        },
      },
    },

    count: {
      root: {
        color: 'inherit',
        fontSize: tokens.fontSizes['text-xs'],
        lineHeight: tokens.lineHeights['text-xs'],
        direction: 'ltr',
        userSelect: 'none',
      },
    },
  };
};

export default styleFn;
