import type { ThemeColor, ThemeSize, ThemeType } from 'packages/common/theme/types';
import type { Classes, Tailwind } from '@sigmaui-kit/use-stylex';

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  xClass?: Tailwind | Tailwind[];
}

export interface FCProps<Styles> extends FCDefaultProps {
  color?: ThemeColor;
  size?: ThemeSize;
  type?: ThemeType;
  styles?: Partial<Record<keyof Styles, any>>;
}

export interface FCWithStylesProps<Styles> extends FCProps<Styles> {
  classes?: Classes<Styles>;
}