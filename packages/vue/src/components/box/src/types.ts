import type { FCWithStylesProps } from '@packages/vue/types'

export interface BoxProps<Styles> extends FCWithStylesProps<Styles> {
  as?: keyof HTMLElementTagNameMap
}
