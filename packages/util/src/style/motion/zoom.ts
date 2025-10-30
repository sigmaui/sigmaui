import deepmerge from 'deepmerge';

import { initMotion } from './motion';

export const zoomIn = () => ({
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
});

export const zoomOut = () => ({
  '0%': {
    transform: 'scale(1)',
  },

  '100%': {
    transform: 'scale(0.2)',
    opacity: 0,
  },
});

export const zoomBigIn = () => ({
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
});

export const zoomBigOut = () => ({
  '0%': {
    transform: 'scale(1)',
  },

  '100%': {
    transform: 'scale(0.8)',
    opacity: 0,
  },
});

export const zoomUpIn = () => ({
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%',
  },
});

export const zoomUpOut = () => ({
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0,
  },
});

export const zoomLeftIn = () => ({
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%',
  },
});

export const zoomLeftOut = () => ({
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0,
  },
});

export const zoomRightIn = () => ({
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%',
  },
});

export const zoomRightOut = () => ({
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0,
  },
});

export const zoomDownIn = () => ({
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0,
  },

  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%',
  },
});

export const zoomDownOut = () => ({
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%',
  },

  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0,
  },
});

type ZoomMotionTypes =
  | 'zoom'
  | 'zoom-big'
  | 'zoom-big-fast'
  | 'zoom-left'
  | 'zoom-right'
  | 'zoom-up'
  | 'zoom-down';

const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut,
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut,
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut,
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut,
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut,
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut,
  },
};

export const initZoomMotion = (
  prefixCls: string,
  motionName: ZoomMotionTypes,
  renderer: any,
  sameLevel = false
) => {
  const motionCls = `.${prefixCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = zoomMotion[motionName];

  const sameLevelPrefix = sameLevel ? '&' : '& ';

  const inKeyframeName = renderer.renderKeyframe(inKeyframes, {});
  const outKeyframeName = renderer.renderKeyframe(outKeyframes, {});

  return deepmerge.all([
    initMotion(
      motionCls,
      inKeyframeName,
      outKeyframeName,
      motionName === 'zoom-big-fast' ? '0.1s' : '0.2s',
      sameLevel
    ),

    {
      [`${sameLevelPrefix}${motionCls}-enter`]: {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(0.08, 0.82, 0.17, 1)',

        [`&${motionCls}-enter-prepare`]: {
          transform: 'none',
        },
      },

      [`${sameLevelPrefix}${motionCls}-appear`]: {
        transform: 'scale(0)',
        opacity: 0,
        animationTimingFunction: 'cubic-bezier(0.08, 0.82, 0.17, 1)',

        [`&${motionCls}-appear-prepare`]: {
          transform: 'none',
        },
      },

      [`${sameLevelPrefix}${motionCls}-leave`]: {
        animationTimingFunction: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      },
    },
  ]);
};
