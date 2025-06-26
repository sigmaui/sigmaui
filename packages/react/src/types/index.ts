import type { ReactNode } from 'react';
import type { ThemeColor, ThemeSize, ThemeType } from 'packages/common/theme/types';
import type { Classes, Tailwind } from '@sigmaui-kit/use-stylex';

export interface FCProps {
  prefixCls: string;
  className?: string;
  children?: ReactNode;
  classX: Tailwind | Tailwind[];
}

export interface FCWithStylesProps<Styles> extends FCProps {
  classes: Classes<Styles>;
  color?: ThemeColor;
  size?: ThemeSize;
  type?: ThemeType;
  styles?: Partial<Record<keyof Styles, any>>;
}