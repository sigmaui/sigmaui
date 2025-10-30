import type { StyleFn } from '@sigma-ui-kit/theme';

import type { DrawerProps, SematicName } from '../types';
import genMotionStyle from './motion';

const token = {
  boxShadowDrawerLeft:
    '-6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerRight:
    '6px 0 16px 0 rgba(0, 0, 0, 0.08), 3px 0 6px -4px rgba(0, 0, 0, 0.12), 9px 0 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerUp:
    '0 -6px 16px 0 rgba(0, 0, 0, 0.08), 0 -3px 6px -4px rgba(0, 0, 0, 0.12), 0 -9px 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerDown:
    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);',
  motionDurationSlow: '0.3s',
};

const styleFn: StyleFn<DrawerProps, SematicName> = props => {
  const { tokens, componentCls } = props;

  const wrapperCls = `${componentCls}-content-wrapper`;

  const motionStyle = genMotionStyle({
    componentCls,
    motionDuration: token.motionDurationSlow,
  });

  return {
    root: {
      root: {
        position: 'fixed',
        inset: 0,
        zIndex: tokens.zIndices.popupBase,
        pointerEvents: 'none',
        fontFamily: tokens.fonts,
        color: tokens.colors.text.strong,

        // ========================= Motion =========================
        ...motionStyle,

        // ========================= Placement =========================
        [`&${componentCls}-left > ${wrapperCls}`]: {
          top: 0,
          bottom: 0,
          left: 0,
          boxShadow: token.boxShadowDrawerLeft,
        },
        [`&${componentCls}-right > ${wrapperCls}`]: {
          top: 0,
          right: 0,
          bottom: 0,
          boxShadow: token.boxShadowDrawerRight,
        },
        [`&${componentCls}-top > ${wrapperCls}`]: {
          top: 0,
          insetInline: 0,
          boxShadow: token.boxShadowDrawerUp,
        },
        [`&${componentCls}-bottom > ${wrapperCls}`]: {
          bottom: 0,
          insetInline: 0,
          boxShadow: token.boxShadowDrawerDown,
        },
      },
    },
    mask: {
      root: {
        position: 'absolute',
        inset: 0,
        background: tokens.colors.background.mask,
        zIndex: tokens.zIndices.popupBase,
        pointerEvents: 'auto',
        transition: `all ${token.motionDurationSlow}`,

        [`&${wrapperCls}-hidden`]: {
          display: 'none',
        },
      },
    },

    wrapper: {
      root: {
        position: 'absolute',
        zIndex: tokens.zIndices.popupBase,
        maxWidth: '100vw',
        transition: `all ${token.motionDurationSlow}`,

        [`&${wrapperCls}-hidden`]: {
          display: 'none',
        },
      },
    },

    section: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        background: tokens.colors.background.base,
        pointerEvents: 'auto',
      },
    },
    dragger: {
      root: {},
    },
    header: {
      root: {
        display: 'flex',
        flex: 0,
        alignItems: 'center',
        borderBottom: `1px solid ${tokens.colors.stroke.weak}`,
        padding: 16,

        [`& ${componentCls}-header-title`]: {
          display: 'flex',
          flex: 1,
          fontFamily: tokens.fonts,
          fontSize: tokens.fontSizes['display-xs'],
          fontWeight: tokens.fontWeights.bold,
          lineHeight: tokens.lineHeights['display-xs'],
          alignItems: 'center',
          gap: 8,
          minWidth: 0,
          minHeight: 0,
        },
        [`& ${componentCls}-header-extra`]: {
          flex: 'none',
        },
      },
    },
    body: {
      root: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
        padding: 16,
        overflow: 'auto',
        [`& ${componentCls}-body-skeleton`]: {
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
    footer: {
      root: {
        flexShrink: 0,
        padding: '12px 16px',
        borderTop: `1px solid ${tokens.colors.stroke.weak}`,
      },
    },
  };
};

export default styleFn;
