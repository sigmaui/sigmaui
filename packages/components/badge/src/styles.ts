import type { StyleFn } from '@sigma-ui-kit/theme';

import type { BadgeProps, SemanticName } from './types';

const styleFn: StyleFn<BadgeProps, SemanticName> = props => {
  const { tokens } = props;
  return {
    root: {
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: tokens.fonts,
        fontWeight: tokens.fontWeights.medium,
        border: '1px solid',
        borderRadius: tokens.radii.rounded,
        whiteSpace: 'nowrap',
        userSelect: 'none',
      },

      variants: [
        {
          props: props => props.size === 'smaller',
          style: {
            height: '20px',
            paddingTop: '2px',
            paddingBottom: '2px',
            paddingLeft: tokens.buttons.paddingHorizontal.smallest,
            paddingRight: tokens.buttons.paddingHorizontal.smallest,
            fontSize: tokens.fontSizes['text-xxs'],
            lineHeight: tokens.lineHeights['text-xxs'],
            gap: tokens.buttons.spacing.smaller,

            '&.smBadge-hasIcon.smBadge-startIcon:not(:has(.smBadge-endIcon))': {
              paddingRight: tokens.buttons.paddingHorizontal.small,
              paddingLeft: tokens.buttons.spacing.smaller,
            },

            '&.smBadge-hasIcon.smBadge-endIcon:not(:has(.smBadge-startIcon))': {
              paddingLeft: tokens.buttons.paddingHorizontal.small,
              paddingRight: tokens.buttons.spacing.smaller,
            },
          },
        },
        {
          props: props => props.size === 'small',
          style: {
            height: 24,
            paddingTop: 4,
            paddingBottom: 4,
            paddingLeft: 8,
            paddingRight: 8,
            fontSize: tokens.fontSizes['text-xxs'],
            lineHeight: tokens.lineHeights['text-xxs'],
            gap: tokens.buttons.spacing.smaller,

            '&.smBadge-hasIcon.smBadge-startIcon:not(:has(.smBadge-endIcon))': {
              paddingLeft: 6,
              paddingRight: 10,
            },

            '&.smBadge-hasIcon.smBadge-endIcon:not(:has(.smBadge-startIcon))': {
              paddingLeft: 10,
              paddingRight: 6,
            },
          },
        },
        {
          props: props => props.size === 'standard',
          style: {
            height: 30,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: tokens.fontSizes['text-xs'],
            lineHeight: tokens.lineHeights['text-xs'],
            gap: tokens.buttons.spacing.small,
            '&.smBadge-hasIcon.smBadge-startIcon:not(:has(.smBadge-endIcon))': {
              paddingLeft: 8,
              paddingRight: 12,
            },

            '&.smBadge-hasIcon.smBadge-endIcon:not(:has(.smBadge-startIcon))': {
              paddingLeft: 12,
              paddingRight: 8,
            },
          },
        },
        {
          props: props => props.size === 'big',
          style: {
            height: 32,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: tokens.fontSizes['text-sm'],
            lineHeight: tokens.lineHeights['text-sm'],
            gap: tokens.buttons.spacing.small,
            '&.smBadge-hasIcon.smBadge-startIcon:not(:has(.smBadge-endIcon))': {
              paddingLeft: 8,
              paddingRight: 12,
            },

            '&.smBadge-hasIcon.smBadge-endIcon:not(:has(.smBadge-startIcon))': {
              paddingLeft: 12,
              paddingRight: 8,
            },
          },
        },
        {
          props: props => props.size === 'bigger',
          style: {
            height: 36,
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: tokens.fontSizes['text-sm'],
            lineHeight: tokens.lineHeights['text-sm'],
            gap: tokens.buttons.spacing.small,
            '&.smBadge-hasIcon.smBadge-startIcon:not(:has(.smBadge-endIcon))': {
              paddingLeft: 8,
              paddingRight: 12,
            },

            '&.smBadge-hasIcon.smBadge-endIcon:not(:has(.smBadge-startIcon))': {
              paddingLeft: 12,
              paddingRight: 8,
            },
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'brand',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.brand.strong,
            background: tokens.colors.fill.brand.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'grey',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.strong,
            background: tokens.colors.fill.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'disable',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.weak,
            background: tokens.colors.fill.blanked,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'error',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.error.strong,
            background: tokens.colors.fill.error.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'warning',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.warning.strong,
            background: tokens.colors.fill.warning.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'success',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.success.strong,
            background: tokens.colors.fill.success.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'information',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.information.strong,
            background: tokens.colors.fill.information.strong,
          },
        },
        {
          props: props => props.variant === 'filled' && props.tone === 'discovery',
          style: {
            color: tokens.colors.text.whiteFixed,
            borderColor: tokens.colors.stroke.discovery.strong,
            background: tokens.colors.fill.discovery.strong,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'brand',
          style: {
            color: tokens.colors.text.brand.primary,
            borderColor: tokens.colors.stroke.brand.weak,
            background: tokens.colors.fill.brand.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'grey',
          style: {
            color: tokens.colors.text.weak,
            borderColor: tokens.colors.stroke.weak,
            background: tokens.colors.fill.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'disable',
          style: {
            color: tokens.colors.text.disabled,
            borderColor: tokens.colors.stroke.weak,
            background: tokens.colors.fill.blanked,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'error',
          style: {
            color: tokens.colors.text.error,
            borderColor: tokens.colors.stroke.error.weak,
            background: tokens.colors.fill.error.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'warning',
          style: {
            color: tokens.colors.text.warning,
            borderColor: tokens.colors.stroke.warning.weak,
            background: tokens.colors.fill.warning.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'success',
          style: {
            color: tokens.colors.text.success,
            borderColor: tokens.colors.stroke.success.weak,
            background: tokens.colors.fill.success.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'information',
          style: {
            color: tokens.colors.text.information,
            borderColor: tokens.colors.stroke.information.weak,
            background: tokens.colors.fill.information.weak,
          },
        },
        {
          props: props => props.variant === 'outlined' && props.tone === 'discovery',
          style: {
            color: tokens.colors.text.discovery,
            borderColor: tokens.colors.stroke.discovery.weak,
            background: tokens.colors.fill.discovery.weak,
          },
        },
      ],
    },
    prefix: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      variants: [
        {
          props: props => props.size === 'smaller',
          style: {
            fontSize: tokens.icons.size.xxxs,
          },
        },
        {
          props: props => props.size === 'small',
          style: {
            fontSize: tokens.icons.size.xxxs,
          },
        },
        {
          props: props => props.size === 'standard',
          style: {
            fontSize: tokens.icons.size.xxs,
          },
        },
        {
          props: props => props.size === 'big',
          style: {
            fontSize: tokens.icons.size.xs,
          },
        },
        {
          props: props => props.size === 'bigger',
          style: {
            fontSize: tokens.icons.size.sm,
          },
        },
      ],
    },
    suffix: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      variants: [
        {
          props: props => props.size === 'smaller',
          style: {
            fontSize: tokens.icons.size.xxxs,
          },
        },
        {
          props: props => props.size === 'small',
          style: {
            fontSize: tokens.icons.size.xxs,
          },
        },
        {
          props: props => props.size === 'standard',
          style: {
            fontSize: tokens.icons.size.xs,
          },
        },
        {
          props: props => props.size === 'big',
          style: {
            fontSize: tokens.icons.size.sm,
          },
        },
        {
          props: props => props.size === 'bigger',
          style: {
            fontSize: tokens.icons.size.md,
          },
        },
      ],
    },
    dot: {
      root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  };
};

export default styleFn;
