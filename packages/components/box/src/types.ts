import type React from 'react';
import type { HTMLAttributes } from 'react';
import type { JSX } from 'react/jsx-runtime';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';

export type SemanticName = 'root';

export interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P;
  defaultComponent: D;
}

export interface OverridableAsComponent<M extends BoxTypeMap> {
  <C extends React.ElementType>(
    props: {
      as?: C;
      ref?: React.Ref<React.ComponentPropsWithRef<C>['ref']>;
    } & Omit<React.ComponentPropsWithRef<C>, keyof M['props'] | 'as'> &
      M['props']
  ): React.ReactElement | null;
}

export interface BoxProps<T extends keyof JSX.IntrinsicElements = 'div'>
  extends ComponentBaseProps<SemanticName>,
    HTMLAttributes<HTMLElement> {
  as?: T;
}
