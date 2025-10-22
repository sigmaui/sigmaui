import type { HTMLAttributes } from 'react';
import type { JSX } from 'react/jsx-runtime';
import type { WithStyleProps } from '@sigma-ui-kit/theme';

export type ClassKeys = 'root';

export interface BoxBaseProps<T extends keyof JSX.IntrinsicElements = 'div'>
  extends HTMLAttributes<HTMLElement> {
  as?: T;
}

export type BoxProps<T extends keyof JSX.IntrinsicElements = 'div'> = WithStyleProps<ClassKeys> &
  BoxBaseProps<T>;
