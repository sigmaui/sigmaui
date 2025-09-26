import type { FCProps, StyleProperties, ThemeSize } from 'packages/common/types';

export interface TextProps extends StyleProperties, FCProps {
  as?: keyof HTMLElementTagNameMap;
  size?: ThemeSize;
}
