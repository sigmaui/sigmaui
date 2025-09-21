import type { FCWithStylesProps, StylesProperties, StylesObject } from '@sigmaui-kit/types';

export type {
  StylesProperties,
  StylesObject
}

export enum ANIMATION_NAME {
  BLINK = 'blink'
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  as?: string
  keyframe?: any
  animation?: any
}
