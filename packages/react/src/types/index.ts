import type { ReactNode } from 'react';
import type { ThemeColor, ThemeSize, ThemeType } from 'packages/common/theme/types';
import type { Classes } from 'packages/common/hooks/use-stylex';

export interface FCProps {
  prefixCls: string;
  className?: string;
  children?: ReactNode;
}

export interface FCWithStylesProps<Styles> extends FCProps {
  classes: Classes<Styles>;
  color?: ThemeColor
  size?: ThemeSize
  type?: ThemeType
}