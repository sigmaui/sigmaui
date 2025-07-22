import type { StylesObject } from 'packages/common/types';

export const defaultSizes = {
  _: {},
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
  '2xl': {}
}

export const textSizes = {
  Text: {
    _: {},
    xs: {},
    sm: {
      fontSize: 12,
      lineHeight: 12
    },
    md: {},
    lg: {},
    xl: {},
    '2xl': {}
  } as StylesObject
}

export const inputSizes = {
  Input: {
    _: {},
    xs: {
      fontSize: 12,
      height: 32,
      borderRadius: 6,
      paddingInline: 6
    },
    sm: {
      fontSize: 13,
      height: 36,
      borderRadius: 6,
      paddingInline: 8
    },
    md: {
      fontSize: 14,
      height: 40,
      borderRadius: 8,
      paddingInline: 12
    },
    lg: {
      fontSize: 16,
      height: 44,
      borderRadius: 10,
      paddingInline: 16
    },
    xl: {
      fontSize: 18,
      height: 48,
      borderRadius: 12,
      paddingInline: 18
    },
    '2xl': {}
  } as StylesObject
}

export const buttonSizes = {
  Button: {
    _: {},
    xs: {
      fontSize: 12,
      height: 32,
      borderRadius: 6
    },
    sm: {
      fontSize: 13,
      height: 36,
      borderRadius: 6
    },
    md: {
      fontSize: 14,
      height: 40,
      borderRadius: 8
    },
    lg: {
      fontSize: 16,
      height: 44,
      borderRadius: 10
    },
    xl: {
      fontSize: 18,
      height: 48,
      borderRadius: 12
    },
    '2xl': {}
  } as StylesObject
}

export const switchSizes = {
  Switch: {
    _: {},
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    '2xl': {}
  } as StylesObject
}

export const sizes = {
  ...defaultSizes,
  ...textSizes,
  ...inputSizes,
  ...buttonSizes
};