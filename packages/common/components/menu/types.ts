import type { ReactNode } from 'react'
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

export type { StylesProperties }

export interface MenuItemOption {
  key: string
  label: string | ReactNode
  children?: MenuItemOption[]
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  items?: MenuItemOption[]
  value?: string
  mode?: string
}
