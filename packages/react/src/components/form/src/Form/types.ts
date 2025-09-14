import type { ReactNode } from 'react'
import type { FormInstance } from '@rc-component/form'
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

import type { FormItemOption } from '../FormItem/types'

export type { StylesProperties }

export interface RenderControlArgs {
  type?: FormItemOption['type']
}

export interface IProps<Styles, Values = any> extends FCWithStylesProps<Styles> {
  name?: string
  form?: FormInstance<Values>
  items?: FormItemOption[]
  customRender?: (args: RenderControlArgs) => ReactNode
  formRules?: { [key: string]: any }
  disabled?: boolean
}
