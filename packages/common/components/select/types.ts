import type { ReactNode } from 'react'
import type { CollectionOptions } from '@zag-js/collection'

import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'
import { ValueChangeDetails } from '@ark-ui/react/dist/components/select/select'
import { SelectionDetails } from '@ark-ui/react/dist/components/menu/menu'

export type { StylesProperties }

export interface IProps<Styles, T> extends FCWithStylesProps<Styles> {
  options: CollectionOptions
  placeholder?: string
  label?: string | ReactNode
  itemGroupLabel?: string | ReactNode
  value?: string[]
  onChange?: React.FormEventHandler<HTMLDivElement> | undefined
  defaultValue?: string[]
  onValueChange?: (details: ValueChangeDetails<T>) => void
  onSelect?: (details: SelectionDetails) => void
}
