import type { ReactNode } from 'react'
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

export type { StylesProperties }

export interface SelectOption {
  value: string
  label: string | ReactNode
  disabled?: boolean
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  options: SelectOption[]
  placeholder?: string
}
