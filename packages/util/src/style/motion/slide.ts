import { initMotion } from './motion';

export const slideUpIn = () => ({
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },
});

export const slideUpOut = () => ({
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },
});

export const slideDownIn = () => ({
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1,
  },
});

export const slideDownOut = () => ({
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0,
  },
});

export const slideLeftIn = () => ({
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },
});

export const slideLeftOut = () => ({
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0,
  },
});

export const slideRightIn = () => ({
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0,
  },

  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1,
  },
});

export const slideRightOut = () => ({
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1,
  },

  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0,
  },
});

type SlideMotionTypes = 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right';
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut,
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut,
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut,
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut,
  },
};

export const initSlideMotion = (token: any, motionName: SlideMotionTypes, renderer: any) => {
  const { antCls } = token;
  const motionCls = `${antCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = slideMotion[motionName];

  const inKeyframeName = renderer.renderKeyframe(inKeyframes, {
    initialColor: 'blue',
  });
  const outKeyframeName = renderer.renderKeyframe(outKeyframes, {
    initialColor: 'blue',
  });

  return [
    initMotion(motionCls, inKeyframeName, outKeyframeName, token.motionDurationMid),

    {
      [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
        transform: 'scale(0)',
        transformOrigin: '0% 0%',
        opacity: 0,
        animationTimingFunction: token.motionEaseOutQuint,

        '&-prepare': {
          transform: 'scale(1)',
        },
      },

      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInQuint,
      },
    },
  ];
};
