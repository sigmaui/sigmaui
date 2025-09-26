import type { ReactNode } from 'react';
import type { LoadingDotsProps } from '@sigmaui-kit/loading-dots';
import type { FCWithStylesProps, StylesObject, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties, StylesObject };

export interface IProps<Styles> extends Omit<FCWithStylesProps<Styles>, 'size'> {
  text?: string | ReactNode;
  size?: number;
  full?: boolean;
  center?: boolean;
  dot?: boolean;
  dotProps?: LoadingDotsProps;
}
