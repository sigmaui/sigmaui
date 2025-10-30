import type { StyleFn } from '@sigma-ui-kit/theme';

import type { ButtonProps, SematicName } from './types';

const styleFn: StyleFn<ButtonProps, SematicName> = props => {
  const { tokens } = props;

  return {
    wrapper: {
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid transparent',
        paddingBlock: 8,
        paddingInline: 12,
        cursor: 'pointer',
        fontFamily: tokens.fonts,
        fontStyle: 'normal',
        fontWeight: 600,

        '&[disabled]': {
          cursor: 'not-allowed',
        },
      },
      variants: [
        // Button Size
        {
          props: props => props.size === 'smaller',
          style: {
            height: tokens.buttons.height.smaller,
            paddingInline: tokens.buttons.paddingHorizontal.smaller,
            paddingBlock: tokens.buttons.paddingVertical.smaller,
          },
        },
        {
          props: props => props.size === 'small',
          style: {
            height: tokens.buttons.height.small,
            paddingInline: tokens.buttons.paddingHorizontal.small,
            paddingBlock: tokens.buttons.paddingVertical.small,
            fontSize: tokens.fontSizes['text-xs'],
            lineHeight: tokens.lineHeights['text-xs'],
            borderRadius: tokens.buttons.radii.small,
          },
        },
        {
          props: props => props.size === 'standard',
          style: {
            height: tokens.buttons.height.standard,
            paddingInline: tokens.buttons.paddingHorizontal.standard,
            paddingBlock: tokens.buttons.paddingVertical.standard,
            fontSize: tokens.fontSizes['text-sm'],
            lineHeight: tokens.lineHeights['text-sm'],
            borderRadius: tokens.buttons.radii.standard,
          },
        },
        {
          props: props => props.size === 'big',
          style: {
            height: tokens.buttons.height.big,
            paddingInline: tokens.buttons.paddingHorizontal.big,
            paddingBlock: tokens.buttons.paddingVertical.big,
            fontSize: tokens.fontSizes['text-md'],
            lineHeight: tokens.lineHeights['text-md'],
            borderRadius: tokens.buttons.radii.big,
          },
        },
        {
          props: props => props.size === 'bigger',
          style: {
            height: tokens.buttons.height.bigger,
            paddingInline: tokens.buttons.paddingHorizontal.bigger,
            paddingBlock: tokens.buttons.paddingVertical.bigger,
            fontSize: tokens.fontSizes['text-md'],
            lineHeight: tokens.lineHeights['text-md'],
            borderRadius: tokens.buttons.radii.bigger,
          },
        },
        // =====================================================================
        // ========================== Button Primary ==========================
        {
          props: props => props.variant === 'primary',
          style: {
            color: tokens.colors.text.whiteFixed,
            '&:disabled': {
              color: tokens.colors.text.disabled,
              borderColor: tokens.colors.fill.disabled,
              background: tokens.colors.fill.disabled,
            },
          },
        },
        // Variant: primary - Tone: brand
        {
          props: props => props.variant === 'primary' && props.tone === 'brand',
          style: {
            background: tokens.colors.fill.brand.strong,
            borderColor: tokens.colors.fill.brand.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.brand.strong}`,
              },
            },
            '&:active:not(:disabled)': {
              background: `linear-gradient(0deg, ${tokens.colors.fill.press} 0%, ${tokens.colors.fill.press} 100%), ${tokens.colors.fill.brand.strong}`,
            },
          },
        },
        // Variant: primary - Tone: neutral
        {
          props: props => props.variant === 'primary' && props.tone === 'neutral',
          style: {
            background: tokens.colors.fill.strong,
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.fill.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.strong}`,
              },
            },
            '&:active:not(:disabled)': {
              background: `linear-gradient(0deg, ${tokens.colors.fill.press} 0%, ${tokens.colors.fill.press} 100%), ${tokens.colors.fill.strong}`,
            },
          },
        },
        // Variant: primary - Tone: error
        {
          props: props => props.variant === 'primary' && props.tone === 'error',
          style: {
            background: tokens.colors.fill.error.strong,
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.fill.error.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.error.strong}`,
              },
            },

            '&:active:not(:disabled)': {
              background: tokens.colors.fill.error.strong,
            },
          },
        },
        // Variant: primary - Tone: info
        {
          props: props => props.variant === 'primary' && props.tone === 'info',
          style: {
            background: tokens.colors.fill.information.strong,
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.fill.information.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.information.strong}`,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.information.strong,
            },
          },
        },
        // Variant: primary - Tone: success
        {
          props: props => props.variant === 'primary' && props.tone === 'success',
          style: {
            background: tokens.colors.fill.success.strong,
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.fill.success.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.success.strong}`,
              },
            },

            '&:active:not(:disabled)': {
              background: tokens.colors.fill.success.strong,
            },
          },
        },
        // Variant: primary - Tone: warning
        {
          props: props => props.variant === 'primary' && props.tone === 'warning',
          style: {
            background: tokens.colors.fill.warning.strong,
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.fill.warning.strong,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: `linear-gradient(0deg, ${tokens.colors.fill.hover} 0%, ${tokens.colors.fill.hover} 100%), ${tokens.colors.fill.warning.strong}`,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.warning.strong,
            },
          },
        },
        // =====================================================================
        // ========================== Button Secondary ==========================
        {
          props: props => props.variant === 'secondary',
          style: {
            background: 'transparent',
            '&:disabled': {
              color: tokens.colors.text.disabled,
              borderColor: tokens.colors.fill.disabled,
              background: tokens.colors.fill.disabled,
            },
          },
        },
        // Variant: secondary - Tone: brand
        {
          props: props => props.variant === 'secondary' && props.tone === 'brand',
          style: {
            color: tokens.colors.text.brand.primary,
            borderColor: tokens.colors.stroke.brand.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: tokens.colors.fill.brand.weak,
                borderColor: tokens.colors.stroke.brand.strong,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.brand.medium,
              borderColor: tokens.colors.stroke.brand.strong,
            },
          },
        },
        // Variant: secondary - Tone: neutral
        {
          props: props => props.variant === 'secondary' && props.tone === 'neutral',
          style: {
            color: tokens.colors.text.weak,
            borderColor: tokens.colors.stroke.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: tokens.colors.fill.inverse.hover,
                borderColor: tokens.colors.stroke.inverse.strong,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.inverse.press,
              borderColor: tokens.colors.stroke.inverse.strong,
            },
          },
        },
        // Variant: secondary - Tone: error
        {
          props: props => props.variant === 'secondary' && props.tone === 'error',
          style: {
            color: tokens.colors.text.error,
            borderColor: tokens.colors.stroke.error.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: tokens.colors.fill.error.weak,
                borderColor: tokens.colors.stroke.error.strong,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.error.medium,
              borderColor: tokens.colors.stroke.error.strong,
            },
          },
        },
        // Variant: secondary - Tone: info
        {
          props: props => props.variant === 'secondary' && props.tone === 'info',
          style: {
            color: tokens.colors.text.information,
            borderColor: tokens.colors.stroke.information.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: tokens.colors.fill.information.weak,
                borderColor: tokens.colors.stroke.information.strong,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.information.medium,
              borderColor: tokens.colors.stroke.information.strong,
            },
          },
        },
        // Variant: secondary - Tone: success
        {
          props: props => props.variant === 'secondary' && props.tone === 'success',
          style: {
            color: tokens.colors.text.success,
            borderColor: tokens.colors.stroke.success.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                background: tokens.colors.fill.success.weak,
                borderColor: tokens.colors.stroke.success.strong,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.success.medium,
              borderColor: tokens.colors.stroke.success.strong,
            },
          },
        },
        // Variant: secondary - Tone: warning
        {
          props: props => props.variant === 'secondary' && props.tone === 'warning',
          style: {
            color: tokens.colors.text.warning,
            borderColor: tokens.colors.stroke.warning.weak,
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                borderColor: tokens.colors.stroke.warning.strong,
                background: tokens.colors.fill.warning.weak,
              },
            },
            '&:active:not(:disabled)': {
              background: tokens.colors.fill.warning.medium,
              borderColor: tokens.colors.stroke.warning.strong,
            },
          },
        },
        // =====================================================================
        // ========================== Button Tertiary ==========================
        {
          props: props => props.variant === 'tertiary',
          style: {
            background: 'transparent',
            '@media (hover: hover) and (pointer: fine)': {
              '&:hover:not(:disabled)': {
                textDecoration: 'underline',
              },
            },
            '&:active:not(:disabled)': {
              textDecoration: 'underline',
            },
            '&:disabled': {
              color: tokens.colors.text.disabled,
            },
          },
        },
        // Variant: tertiary - Tone: brand
        {
          props: props => props.variant === 'tertiary' && props.tone === 'brand',
          style: {
            color: tokens.colors.text.brand.primary,
          },
        },
        // Variant: tertiary - Tone: neutral
        {
          props: props => props.variant === 'tertiary' && props.tone === 'neutral',
          style: {
            color: tokens.colors.text.strong,
          },
        },
        // Variant: tertiary - Tone: error
        {
          props: props => props.variant === 'tertiary' && props.tone === 'error',
          style: {
            color: tokens.colors.text.error,
          },
        },
        // Variant: tertiary - Tone: info
        {
          props: props => props.variant === 'tertiary' && props.tone === 'info',
          style: {
            color: tokens.colors.text.information,
          },
        },
        // Variant: tertiary - Tone: success
        {
          props: props => props.variant === 'tertiary' && props.tone === 'success',
          style: {
            color: tokens.colors.text.success,
          },
        },
        // Variant: tertiary - Tone: warning
        {
          props: props => props.variant === 'tertiary' && props.tone === 'warning',
          style: {
            color: tokens.colors.text.warning,
          },
        },
      ],
    },
    prefix: {
      root: {
        marginRight: 6,
      },
    },
    suffix: {
      root: {
        marginLeft: 6,
      },
    },
    link: {
      root: {
        display: 'inline-block',
      },
    },
  };
};

export default styleFn;
