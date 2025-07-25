import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

export type { StylesProperties }

export interface TocEntry {
  title: string
  url: string
  items: TocEntry[]
}

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  entries: TocEntry[]
  contentClassName?: string
}
