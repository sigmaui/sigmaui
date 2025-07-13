import type { FCProps } from '@packages/react/types';

export interface BoxProps extends FCProps {
  as?: keyof HTMLElementTagNameMap
}