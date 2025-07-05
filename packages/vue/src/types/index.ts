import { ThemeColor, ThemeSize, ThemeType, ThemeVariant } from 'packages/common/theme/types';
import type { Classes, Tailwind } from '@sigmaui-kit/use-stylex';

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  xClass?: Tailwind | Tailwind[];
}

export interface FCProps<Styles> extends FCDefaultProps {
  size?: ThemeSize;
  type?: ThemeType;
  color?: ThemeColor;
  variant?: ThemeVariant;
  styles?: Partial<Record<keyof Styles, any>>;
}

export interface FCWithStylesProps<Styles> extends FCProps<Styles> {
  classes?: Classes<Styles>;
}