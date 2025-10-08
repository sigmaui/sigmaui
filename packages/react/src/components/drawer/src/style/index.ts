import genMotionStyle from './motion';
import { IProps, StylesProperties } from '../types';

export type ClassKeys =
  | 'root' // root
  | 'mask' // root => mask
  | 'wrapper' // root => wrapper
  | 'content' // root => wrapper => content
  | 'header' // root => wrapper => content => header
  | 'body' // root => wrapper => content => body
  | 'footer'; // root => wrapper => content => footer

const token = {
  boxShadowDrawerLeft:
    '-6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerRight:
    '6px 0 16px 0 rgba(0, 0, 0, 0.08), 3px 0 6px -4px rgba(0, 0, 0, 0.12), 9px 0 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerUp:
    '0 -6px 16px 0 rgba(0, 0, 0, 0.08), 0 -3px 6px -4px rgba(0, 0, 0, 0.12), 0 -9px 28px 8px rgba(0, 0, 0, 0.05);',
  boxShadowDrawerDown:
    '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);',
  zIndexPopup: 1000,
  colorText: '#000',
  colorBgElevated: '#fff',
  motionDurationSlow: '0.3s',
};

export const styles = ({
  theme = {},
  prefixCls,
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  const componentCls = `.${prefixCls}`;
  const wrapperCls = `${componentCls}-content-wrapper`;

  const motionStyle = genMotionStyle({
    componentCls,
    motionDuration: token.motionDurationSlow,
  });

  return {
    root: {
      position: 'fixed',
      inset: 0,
      zIndex: token.zIndexPopup,
      pointerEvents: 'none',
      color: token.colorText,

      // ========================= Motion =========================
      ...motionStyle,

      // /////////////////////////////////////////////////////////
      //   [`${componentCls}-pure`]: {
      //     position: 'relative',
      //     background: token.colorBgElevated,
      //     display: 'flex',
      //     flexDirection: 'column',

      //     [`&${componentCls}-left`]: {
      //       boxShadow: token.boxShadowDrawerLeft,
      //     },
      //     [`&${componentCls}-right`]: {
      //       boxShadow:
      //         '-6px 0 16px 0 rgba(0, 0, 0, 0.08), -3px 0 6px -4px rgba(0, 0, 0, 0.12), -9px 0 28px 8px rgba(0, 0, 0, 0.05);',
      //     },
      //     [`&${componentCls}-top`]: {
      //       boxShadow: token.boxShadowDrawerUp,
      //     },
      //     [`&${componentCls}-bottom`]: {
      //       boxShadow: token.boxShadowDrawerDown,
      //     },
      //   },

      //   [`${componentCls}-inline`]: {
      //     position: 'absolute',
      //   },

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
    mask: {
      position: 'absolute',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.4)',
      pointerEvents: 'auto',
    },

    wrapper: {
      position: 'absolute',
      zIndex: token.zIndexPopup,
      maxWidth: '100vw',
      transition: `all ${token.motionDurationSlow}`,

      [`&${wrapperCls}-hidden`]: {
        display: 'none',
      },
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      overflow: 'auto',
      background: token.colorBgElevated,
      pointerEvents: 'auto',
    },

    header: {
      display: 'flex',
      flex: 0,
      alignItems: 'center',
      borderBottom: '1px solid var(--Stroke-weak, rgba(41, 43, 51, 0.20))',
      padding: 16,

      [`& ${componentCls}-header-title`]: {
        display: 'flex',
        flex: 1,
        fontFamily: 'var(--family-heading, Inter)',
        fontSize: 'var(--text-size-display-xs, 24px)',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'var(--text-line-height-display-xs, 32px)',
        alignItems: 'center',
        gap: 8,
        minWidth: 0,
        minHeight: 0,
      },
      [`& ${componentCls}-header-extra`]: {
        flex: 'none',
      },
    },
    body: {
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
    footer: {
      flexShrink: 0,
      padding: '12px 16px',
      borderTop: '1px solid var(--Stroke-weak, rgba(41, 43, 51, 0.20))',
    },
  };
};

export type DrawerTypes = ReturnType<typeof styles>;
export type DrawerKeys = keyof DrawerTypes;

export type DrawerProps = IProps<DrawerTypes>;

// ======================= RIGHT =======================
// [`& ${componentCls}-panel-motion-right-enter, & ${componentCls}-panel-motion-right-appear, & ${componentCls}-panel-motion-right-leave-start`]:
//   {
//     transition: 'none',
//   },
// [`& ${componentCls}-panel-motion-right-enter-active, & ${componentCls}-panel-motion-right-appear-active, & ${componentCls}-panel-motion-right-leave-active`]:
//   {
//     transition: 'all 0.3s',
//   },
// [`& ${componentCls}-panel-motion-right-enter, & ${componentCls}-panel-motion-right-appear`]:
//   {
//     opacity: 0.7,
//     transform: 'translateX(100%)',
//   },
// [`& ${componentCls}-panel-motion-right-enter-active, & ${componentCls}-panel-motion-right-appear-active`]:
//   {
//     opacity: 1,
//     transform: 'none',
//   },
// [`& ${componentCls}-panel-motion-right-leave`]: {
//   opacity: 1,
//   transform: 'none',
// },
// [`& ${componentCls}-panel-motion-right-leave-active`]: {
//   opacity: 0.7,
//   transform: 'translateX(100%)',
// },
//   ======================= LEFT =======================
// [`& ${componentCls}-panel-motion-left-enter, & ${componentCls}-panel-motion-left-appear, & ${componentCls}-panel-motion-left-leave-start`]:
//   {
//     transition: 'none',
//   },
// [`& ${componentCls}-panel-motion-left-enter-active, & ${componentCls}-panel-motion-left-appear-active, & ${componentCls}-panel-motion-left-leave-active`]:
//   {
//     transition: 'all 0.3s',
//   },
// [`& ${componentCls}-panel-motion-left-enter, & ${componentCls}-panel-motion-left-appear`]:
//   {
//     opacity: 0.7,
//     transform: 'translateX(-100%)',
//   },
// [`& ${componentCls}-panel-motion-left-enter-active, & ${componentCls}-panel-motion-left-appear-active`]:
//   {
//     opacity: 1,
//     transform: 'none',
//   },
// [`& ${componentCls}-panel-motion-left-leave`]: {
//   opacity: 1,
//   transform: 'none',
// },
// [`& ${componentCls}-panel-motion-left-leave-active`]: {
//   opacity: 0.7,
//   transform: 'translateX(-100%)',
// },
// //   ======================= TOP =======================
// [`& ${componentCls}-panel-motion-top-enter, & ${componentCls}-panel-motion-top-appear, & ${componentCls}-panel-motion-top-leave-start`]:
//   {
//     transition: 'none',
//   },
// [`& ${componentCls}-panel-motion-top-enter-active, & ${componentCls}-panel-motion-top-appear-active, & ${componentCls}-panel-motion-top-leave-active`]:
//   {
//     transition: 'all 0.3s',
//   },
// [`& ${componentCls}-panel-motion-top-enter, & ${componentCls}-panel-motion-top-appear`]:
//   {
//     opacity: 0.7,
//     transform: 'translateY(-100%)',
//   },
// [`& ${componentCls}-panel-motion-top-enter-active, & ${componentCls}-panel-motion-top-appear-active`]:
//   {
//     opacity: 1,
//     transform: 'none',
//   },
// [`& ${componentCls}-panel-motion-top-leave`]: {
//   opacity: 1,
//   transform: 'none',
// },
// [`& ${componentCls}-panel-motion-top-leave-active`]: {
//   opacity: 0.7,
//   transform: 'translateY(-100%)',
// },
// //   ======================= BOTTOM =======================
// [`& ${componentCls}-panel-motion-bottom-enter, & ${componentCls}-panel-motion-bottom-appear, & ${componentCls}-panel-motion-bottom-leave-start`]:
//   {
//     transition: 'none',
//   },
// [`& ${componentCls}-panel-motion-bottom-enter-active, & ${componentCls}-panel-motion-bottom-appear-active, & ${componentCls}-panel-motion-bottom-leave-active`]:
//   {
//     transition: 'all 0.3s',
//   },
// [`& ${componentCls}-panel-motion-bottom-enter, & ${componentCls}-panel-motion-bottom-appear`]:
//   {
//     opacity: 0.7,
//     transform: 'translateY(100%)',
//   },
// [`& ${componentCls}-panel-motion-bottom-enter-active, & ${componentCls}-panel-motion-bottom-appear-active`]:
//   {
//     opacity: 1,
//     transform: 'none',
//   },
// [`& ${componentCls}-panel-motion-bottom-leave`]: {
//   opacity: 1,
//   transform: 'none',
// },
// [`& ${componentCls}-panel-motion-bottom-leave-active`]: {
//   opacity: 0.7,
//   transform: 'translateY(100%)',
// },
