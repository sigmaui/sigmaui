import { StyleFn } from '@sigma-ui-kit/theme';

import { ClassKeys, InputBaseProps } from './types';

export const styles: StyleFn<InputBaseProps, ClassKeys> = props => {
  const { tokens, componentCls } = props;

  return {
    root: {
      width: '100%',
      outline: 0,
      borderColor: tokens.colors.stroke.strong,
      borderStyle: 'solid',
      borderWidth: 1,
      color: tokens.colors.text.strong,
      fontFamily: 'inherit',

      '&:hover': {
        borderColor: tokens.colors.stroke.brand.strong,
      },

      '&:focus, &[class*="-focused"]': {
        boxShadow: 'focused',
        borderColor: 'base',
      },

      '&::placeholder': {
        color: 'input.placeholder',
      },

      '&[disabled]': {
        cursor: 'not-allowed',
      },

      '&._error': {
        borderColor: 'error',

        '&:hover': {
          borderColor: 'error',
        },

        '&:focus, &[class*="-focused"]': {
          boxShadow: 'error.focused',
          borderColor: 'error',
        },

        [`& ${componentCls}-prefix`]: {
          color: 'error',
        },
      },

      '& input': {
        background: 'transparent',
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        borderRadius: 0,
        outline: 'none',
        fontFamily: 'inherit',

        '&::placeholder': {
          color: 'input.placeholder',
        },
      },
    },
    affixWrapper: {
      display: 'flex',
    },
    prefix: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginRight: 4,

      '& svg': {
        // size: `icon.${size}`,
      },
    },
    suffix: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 4,

      '& svg': {
        // size: `icon.${size}`,
      },

      [`& ${componentCls}-clear-icon`]: {
        backgroundColor: 'icon',
        borderRadius: '50%',
        border: 'none',
        outline: 'none',
        margin: 0,
        padding: 2,
        lineHeight: 0,
        cursor: 'pointer',

        '&[class*="-hidden"]': {
          visibility: 'hidden',
        },

        '& svg': {
          width: 10,
          height: 10,
        },
      },
    },
    groupWrapper: {},
    input: {},
    variant: {},
    count: {
      whiteSpace: 'nowrap',
      // color: `var(description, rgba(0,0,0,0.45))`,
      color: 'description',
    },
  };
};

export default styles;
