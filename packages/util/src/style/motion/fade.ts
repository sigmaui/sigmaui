import deepmerge from 'deepmerge';

import { initMotion } from './motion';

export const fadeIn = () => ({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const fadeOut = () => ({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const initFadeMotion = (prefixCls: string, renderer: any, sameLevel = false) => {
  const motionCls = `.${prefixCls}-fade`;
  const sameLevelPrefix = sameLevel ? '&' : '& ';

  const fadeInName = renderer.renderKeyframe(fadeIn, {});
  const fadeOutName = renderer.renderKeyframe(fadeOut, {});

  return deepmerge.all([
    initMotion(motionCls, fadeInName, fadeOutName, '0.3s', sameLevel),
    {
      [`${sameLevelPrefix}${motionCls}-enter, ${sameLevelPrefix}${motionCls}-appear`]: {
        opacity: 0,
        animationTimingFunction: 'linear',
      },

      [`${sameLevelPrefix}${motionCls}-leave`]: {
        animationTimingFunction: 'linear',
      },
    },
  ]);
};
