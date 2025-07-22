import type { CSSProperties } from 'fela';
import { type InternalTheme } from '@microui-kit/theme';
import type { Classes } from 'packages/common/components/types';

interface StyleProperties extends CSSProperties {
  size?: string
  variant?: string
}

export type Breakpoints = {
  breakpoints: {
    mediaType?: 'max' | 'min' | string
  } | {
    [key: string | number]: StyleProperties
  }
}

export type TStyles =
  { [key: 'wrapper' | string]: Breakpoints | StyleProperties | TStyles }
  | ((theme: any, props: any) => {
  [key: 'wrapper' | string]: Breakpoints | StyleProperties | TStyles
})

export type Styles<T> = { [K in keyof T]?: CSSProperties } | ((theme: InternalTheme, props: any) => {
  [K in keyof T]?: CSSProperties
})

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: any;
}

export interface FCProps extends FCDefaultProps {

}

export interface FCWithStylesProps<IStyles> extends FCProps {
  classes?: Classes<IStyles>
  theme?: InternalTheme
  _style?: Styles<IStyles>
}