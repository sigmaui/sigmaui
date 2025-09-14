import type { FCWithStylesProps, StylesProperties, ThemeSize, ThemeVariant } from 'packages/common/types'

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  href?: string
  size?: ThemeSize
  variant?: ThemeVariant
  status?: string
  placeholder?: string
  disabled?: boolean
}
