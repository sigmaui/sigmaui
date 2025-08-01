import type { FCWithStylesProps } from 'packages/common/types'
import { ControlComponentType } from './shared/controls/declaration'
import { styles } from './styles'

export enum CodeEnum {
  REACT = 'react',
  VUE = 'vue',
}
export interface IData {
  code: {
    [CodeEnum.REACT]: string
    [CodeEnum.VUE]: string
  }
}
export type ComponentPreviewTypes = ReturnType<typeof styles>
export type ComponentPreviewKeys = keyof ComponentPreviewTypes

export type ComponentPreviewProps<T> = IProps<ComponentPreviewTypes, T>

export interface IProps<Styles, T> extends FCWithStylesProps<Styles> {
  data: IData
  items: ControlComponentType<T>[]
}
