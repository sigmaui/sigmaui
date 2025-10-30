import type { StyleFn } from '@sigma-ui-kit/theme';
import { initFadeMotion, initZoomMotion } from '@sigma-ui-kit/util/style/motion';

import type { SemanticName, ModalProps } from './types';

const styleFn: StyleFn<ModalProps, SemanticName> = props => {
  const { tokens, componentCls, renderer } = props;

  const fadeMotionStyle = initFadeMotion('sm', renderer, true);
  const zoomMotionStyle = initZoomMotion('sm', 'zoom', renderer, true);

  return {
    // sm-modal-wrap
    wrapper: {
      root: {
        position: 'fixed',
        inset: 0,
        zIndex: tokens.zIndices.popupBase,
        overflow: 'auto',
        outline: 0,
        WebkitOverflowScrolling: 'touch',

        [`&${componentCls}-centered`]: {
          textAlign: 'center',

          '&::before': {
            display: 'inline-block',
            width: 0,
            height: '100%',
            verticalAlign: 'middle',
            content: '""',
          },
          [`& ${componentCls}`]: {
            top: 0,
            display: 'inline-block',
            paddingBottom: 0,
            textAlign: 'start',
            verticalAlign: 'middle',
          },
        },

        [`& ${componentCls}`]: {
          boxSizing: 'border-box',
          padding: 0,
          color: tokens.colors.text.strong,
          fontSize: tokens.fontSizes['text-sm'],
          lineHeight: tokens.lineHeights['text-sm'],
          listStyle: 'none',
          fontFamily: tokens.fonts,
          pointerEvents: 'none',
          position: 'relative',
          top: 100,
          width: 'auto',
          maxWidth: `calc(100vw - 32px)`,
          margin: '0 auto',
          paddingBottom: '16px',

          ...zoomMotionStyle,
        },
      },
    },
    // sm-modal-header
    header: {
      root: {
        padding: '16px 24px 12px 24px',
        boxShadow:
          '0px 2px 4px -2px rgba(41, 43, 51, 0.02), 0px 4px 8px -2px rgba(41, 43, 51, 0.1)',
      },
    },

    title: {
      root: {
        fontSize: tokens.fontSizes['text-lg'],
        lineHeight: tokens.lineHeights['text-lg'],
        fontWeight: tokens.fontWeights.semiBold,
        color: tokens.colors.text.strong,
      },
    },
    // sm-modal-body
    body: {
      root: {
        padding: '24px',
      },
    },
    // sm-modal-footer
    footer: {
      root: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 12,
        padding: '12px 24px 16px 24px',
        borderTop: `1px solid ${tokens.colors.stroke.weak}`,
      },
    },
    // sm-modal-container
    container: {
      root: {
        position: 'relative',
        backgroundColor: tokens.colors.background.base,
        backgroundClip: 'padding-box',
        border: 0,
        borderRadius: tokens.radii.lg,
        boxShadow: tokens.boxShadows.lg,
        pointerEvents: 'auto',
      },
    },
    // sm-modal-title

    // sm-modal-mask
    mask: {
      root: {
        position: 'fixed',
        inset: 0,
        zIndex: tokens.zIndices.popupBase,
        height: '100%',
        backgroundColor: tokens.colors.background.mask,
        pointerEvents: 'none',

        [`&${componentCls}-mask-hidden`]: {
          display: 'none',
        },

        ...fadeMotionStyle,

        // [`&${componentCls}-fade-enter, &${componentCls}-fade-appear`]: {
        //   opacity: 0,
        //   animationDuration: '0.3s',
        //   animationFillMode: 'both',
        //   animationTimingFunction: 'cubic-bezier(0.55, 0, 0.55, 0.2)',
        //   animationPlayState: 'paused',
        // },

        // [`&${componentCls}-fade-leave`]: {
        //   animationDuration: '0.3s',
        //   animationFillMode: 'both',
        //   animationTimingFunction: 'cubic-bezier(0.55, 0, 0.55, 0.2)',
        //   animationPlayState: 'paused',
        // },

        // [`&${componentCls}-fade-enter${componentCls}-fade-enter-active, &${componentCls}-fade-appear${componentCls}-fade-appear-active`]:
        //   {
        //     animationName: rcDialogFadeIn,
        //     animationPlayState: 'running',
        //   },

        // [`&${componentCls}-fade-leave${componentCls}-fade-leave-active`]: {
        //   animationName: rcDialogFadeOut,
        //   animationPlayState: 'running',
        // },
      },
    },
  };
};

export default styleFn;
