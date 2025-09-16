import type { ReactNode } from 'react';
import type { FormInstance, FormProps } from '@rc-component/form';
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types';

import type { FormItemOption } from '../FormItem/types'

export type { StylesProperties }

export interface StoreProviderProps {
  form: FormInstance
  formName?: string
  isAutoTrim?: boolean
  fieldChanges?: { [key: string]: boolean }
}

export interface RenderControlArgs {
  type?: FormItemOption['type']
}

export interface IProps<Styles, Values = any> extends Omit<FormProps, 'children'>, FCWithStylesProps<Styles> {
  name?: string
  form?: FormInstance<Values>
  items?: FormItemOption[]
  customRender?: (args: RenderControlArgs) => ReactNode
  formRules?: { [key: string]: any }
  disabled?: boolean
  isAutoTrim?: boolean
}
