import type { CSSProperties, IRenderer } from 'fela'
import type { WithTranslation } from 'react-i18next'
import { type Theme } from '@microui-kit/theme'

import { type Tailwind } from './tailwind'

export type ClassString = `${Tailwind}`

export interface StyleProperties extends CSSProperties {
  size?: string
  variant?: string
}

export type Breakpoints = {
  breakpoints:
    | { mediaType?: 'max' | 'min' | string }
    | { [key: string | number]: StyleProperties }
}

export type StylesProperties = { _className: string } | Breakpoints | StyleProperties | StylesObject

export type StylesObject = { [key: string]: StyleProperties | StylesObject | false | number }

export type Styles<T> =
  | { [K in keyof T]?: StylesProperties }
  | ((theme: Theme, props: any,) => { [K in keyof T]?: StylesProperties })

export type Classes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? (...args: Parameters<T[K]>) => {
      [key: string]: string
    }
    : string
}

export interface FCDefaultProps {
  prefixCls?: string
  className?: string
  children?: any
}

export interface FCProps extends FCDefaultProps {
  _class?: ClassString | ClassString[] | string | undefined
}

export interface FCWithStylesProps<IStyles> extends FCProps {
  classes?: Classes<IStyles>
  theme?: Theme
  renderer?: IRenderer
  t?: WithTranslation['t']
  _style?: Styles<IStyles>
  extendStyle?: Styles<IStyles>
}

export type ThemeColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error' | 'disabled'

export type ThemeSize = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type ThemeVariant = 'default' | 'solid' | 'outlined' | 'dashed' | 'filled' | 'text' | 'link'
