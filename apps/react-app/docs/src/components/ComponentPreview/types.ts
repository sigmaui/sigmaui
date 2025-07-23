import type { FCWithStylesProps } from 'packages/common/types'

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

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  data: IData
}
