import type { ReactNode } from 'react'
import type { FCWithStylesProps, StylesProperties, ThemeSize, ThemeVariant } from 'packages/common/types'

export type { StylesProperties }

export interface SelectOption {
  value: string
  label: string | ReactNode
  disabled?: boolean
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options: SelectOption[]
  placeholder?: string,
  size?: ThemeSize
  variant?: ThemeVariant
}
