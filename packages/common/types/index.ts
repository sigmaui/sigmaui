import type { CSSProperties } from 'fela';
import { type Theme } from '@microui-kit/theme';

export interface StyleProperties extends CSSProperties {
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

export type StylesProperties = Breakpoints | StyleProperties;

export type StylesObject = { [key: string]: StyleProperties };

export type Styles<T> = { [K in keyof T]?: CSSProperties } | ((theme: Theme, props: any) => {
  [K in keyof T]?: CSSProperties
})

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ((...args: Parameters<T[K]>) => {
    [key: string]: string
  }) : string;
}

export interface FCDefaultProps {
  prefixCls?: string;
  className?: string;
  children?: any;
}

export interface FCProps extends FCDefaultProps {

}

export interface FCWithStylesProps<IStyles> extends FCProps {
  classes?: Classes<IStyles>
  theme?: Theme
  _style?: Styles<IStyles>
  extendStyle?: Styles<IStyles>
}

export type ThemeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'
  | 'disabled';

export type ThemeSize = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type ThemeVariant = 'default' | 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link';