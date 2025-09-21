import { ANIMATION_NAME } from './types';
import type { IProps, StylesProperties, StylesObject } from './types';

export type ClassKeys = 'wrapper';

export const styles = ({
  renderer,
  keyframe,
  animation = {}
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  let { name, duration = '300ms', delay, timing = 'linear', iteration = 'infinite', fillMode } = animation;

  if (!keyframe) {
    if (name === ANIMATION_NAME.BLINK) {
      keyframe = {
        '0%': { opacity: 0.2 },
        '20%': { opacity: 1 },
        '100% ': { opacity: 0.2 }
      }

      fillMode = 'both';
    }
  }

  if (!duration) {
    duration = '300ms'
  }

  const wrapperStyle: StylesObject = {};

  const animationName = renderer?.renderKeyframe(() => {
    return keyframe
  }, {});

  if (animationName) {
    (wrapperStyle as any).animationName = animationName;
  }

  if (duration) {
    wrapperStyle.animationDuration = duration;
  }

  if (delay) {
    wrapperStyle.animationDelay = delay;
  }

  if (timing) {
    wrapperStyle.animationTimingFunction = timing;
  }

  if (fillMode) {
    wrapperStyle.animationFillMode = fillMode;
  }

  if (iteration) {
    wrapperStyle.animationIterationCount = iteration;
  }

  return {
    wrapper: wrapperStyle
  }
}

export type AnimateTypes = ReturnType<typeof styles>
export type AnimateKeys = keyof AnimateTypes

export type AnimateProps = IProps<AnimateTypes>
