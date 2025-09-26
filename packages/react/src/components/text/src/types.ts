import type { FCProps, StyleProperties, ThemeSize } from '@sigmaui-kit/types';

export interface TextProps extends StyleProperties, FCProps {
  as?: keyof HTMLElementTagNameMap;
  size?: ThemeSize;
}
