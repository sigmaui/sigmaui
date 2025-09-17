import type { StylesObject } from 'packages/common/types'

export const fontSizes = {
  default: 14,
  xs: 12,
  sm: 13,
  md: 14,
  lg: 16,
  xl: 18,
  '2xl': 20,
}

export const heights = {
  default: 32,
  xs: 32,
  sm: 36,
  md: 40,
  lg: 44,
  xl: 48,
  '2xl': 56,
}

export const radii = {
  default: 6,
  xs: 6,
  sm: 6,
  md: 8,
  lg: 10,
  xl: 12,
  '2xl': 16,
}

export const defaultSizes = {
  _: {},
  xs: {},
  sm: {},
  md: {},
  lg: {},
  xl: {},
  '2xl': {},
}

export const textSizes = {
  _: {
    fontSize: fontSizes.md
  },
  xs: {
    fontSize: fontSizes.xs,
  },
  sm: {
    fontSize: fontSizes.sm,
  },
  md: {
    fontSize: fontSizes.md,
  },
  lg: {
    fontSize: fontSizes.lg,
  },
  xl: {
    fontSize: fontSizes.xl,
  },
  '2xl': {}
}

export const iconSizes = {
  _: {
    width: 16,
    height: 16
  },
  xs: {
    width: 18,
    height: 18
  },
  sm: {
    width: 20,
    height: 20
  },
  md: {
    width: 22,
    height: 22
  },
  lg: {
    width: 24,
    height: 24
  },
  xl: {
    width: 26,
    height: 26
  }
}

export const inputSizes = {
  Input: {
    _: {
      fontSize: fontSizes.default,
      height: heights.default,
      borderRadius: radii.default,
      paddingInline: 10,
    },
    xs: {
      fontSize: fontSizes.xs,
      height: heights.xs,
      borderRadius: radii.xs,
      paddingInline: 6,
    },
    sm: {
      fontSize: fontSizes.sm,
      height: heights.sm,
      borderRadius: radii.sm,
      paddingInline: 8,
    },
    md: {
      fontSize: fontSizes.md,
      height: heights.md,
      borderRadius: radii.md,
      paddingInline: 12,
    },
    lg: {
      fontSize: fontSizes.lg,
      height: heights.lg,
      borderRadius: radii.lg,
      paddingInline: 16,
    },
    xl: {
      fontSize: fontSizes.xl,
      height: heights.xl,
      borderRadius: radii.xl,
      paddingInline: 18,
    },
    '2xl': {},
    icon: iconSizes
  } as StylesObject,
  Password: {
    icon: iconSizes
  }
}

export const buttonSizes = {
  Button: {
    _: {
      fontSize: fontSizes.default,
      height: heights.default,
      borderRadius: radii.default,
    },
    xs: {
      fontSize: fontSizes.xs,
      height: heights.xs,
      borderRadius: radii.xs,
    },
    sm: {
      fontSize: fontSizes.sm,
      height: heights.sm,
      borderRadius: radii.sm,
    },
    md: {
      fontSize: fontSizes.md,
      height: heights.md,
      borderRadius: radii.md,
    },
    lg: {
      fontSize: fontSizes.lg,
      height: heights.lg,
      borderRadius: radii.lg,
    },
    xl: {
      fontSize: fontSizes.xl,
      height: heights.xl,
      borderRadius: radii.xl,
    },
    '2xl': {},
  } as StylesObject,
}

export const selectSizes = {
  Select: {
    _: {
      fontSize: fontSizes.default,
      height: heights.default,
      borderRadius: radii.default,
    },
    xs: {
      fontSize: fontSizes.xs,
      height: heights.xs,
      borderRadius: radii.xs,
    },
    sm: {
      fontSize: fontSizes.sm,
      height: heights.sm,
      borderRadius: radii.sm,
    },
    md: {
      fontSize: fontSizes.md,
      height: heights.md,
      borderRadius: radii.md,
    },
    lg: {
      fontSize: fontSizes.lg,
      height: heights.lg,
      borderRadius: radii.lg,
    },
    xl: {
      fontSize: fontSizes.xl,
      height: heights.xl,
      borderRadius: radii.xl,
    },
    '2xl': {},
  } as StylesObject,
}

export const switchSizes = {
  Switch: {
    _: {},
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
    '2xl': {},
  } as StylesObject,
}

export const tooltipSizes = {
  Tooltip: {
    _: {
      fontSize: fontSizes.default,
      height: heights.default,
      borderRadius: radii.default,
    },
    xs: {
      fontSize: fontSizes.xs,
      height: heights.xs,
      borderRadius: radii.xs,
    },
    sm: {
      fontSize: fontSizes.sm,
      height: heights.sm,
      borderRadius: radii.sm,
    },
    md: {
      fontSize: fontSizes.md,
      height: heights.md,
      borderRadius: radii.md,
    },
    lg: {
      fontSize: fontSizes.lg,
      height: heights.lg,
      borderRadius: radii.lg,
    },
    xl: {
      fontSize: fontSizes.xl,
      height: heights.xl,
      borderRadius: radii.xl,
    },
    '2xl': {},
    text: textSizes
  } as StylesObject,
}

export const sizes = {
  ...defaultSizes,
  ...textSizes,
  ...inputSizes,
  ...buttonSizes,
  ...selectSizes,
  ...tooltipSizes,
  Text: textSizes,
  Icon: iconSizes
}
