import { initMotion } from './motion';

export const moveDownIn = () => ({
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },

  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },
});

export const moveDownOut = () => ({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },

  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },
});

export const moveLeftIn = () => ({
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },

  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },
});

export const moveLeftOut = () => ({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },

  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },
});

export const moveRightIn = () => ({
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },

  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },
});

export const moveRightOut = () => ({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },

  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },
});

export const moveUpIn = () => ({
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },

  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },
});

export const moveUpOut = () => ({
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1,
  },

  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0,
  },
});

type MoveMotionTypes = 'move-up' | 'move-down' | 'move-left' | 'move-right';
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut,
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut,
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut,
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut,
  },
};

export const initMoveMotion = (token: any, motionName: MoveMotionTypes, renderer: any) => {
  const { antCls } = token;
  const motionCls = `${antCls}-${motionName}`;
  const { inKeyframes, outKeyframes } = moveMotion[motionName];

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
        opacity: 0,
        animationTimingFunction: token.motionEaseOutCirc,
      },

      [`${motionCls}-leave`]: {
        animationTimingFunction: token.motionEaseInOutCirc,
      },
    },
  ];
};
