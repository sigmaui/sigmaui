import type { ReactNode } from 'react'
import type { CollectionOptions } from '@zag-js/collection'

import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'
import { ValueChangeDetails } from '@ark-ui/react/dist/components/select/select'
import { SelectionDetails } from '@ark-ui/react/dist/components/menu/menu'
import { SelectRootProps } from '@ark-ui/react'

export type { StylesProperties }

export type IProps<Styles, T> = React.RefAttributes<HTMLDivElement> &
  Omit<SelectRootProps<T>, 'collection'> &
  FCWithStylesProps<Styles> & {
    options: CollectionOptions<T>
    placeholder?: string
    label?: string | ReactNode
    itemGroupLabel?: string | ReactNode
    clearIcon?: ReactNode
    renderItem?: (item: T) => ReactNode
    size?: 'small' | 'middle' | 'large'
  }
