import type { ReactNode } from 'react'
import type { FieldProps } from '@rc-component/form/lib/Field'
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

import type { LabelTooltipType } from '../FormItemLabel/types'

export type { StylesProperties }

export enum FormItemTypeEnum {
  INPUT = 'input',
  PASSWORD = 'password',
  TEXTAREA = 'textarea',
  EMAIL = 'email',
  URL = 'url',
  NUMBER = 'number',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  TAG = 'tag'
}

export type FormItemType = `${FormItemTypeEnum}`;

export interface FormItemOption {
  name: string
  label?: ReactNode
  type?: FormItemType
  required?: boolean
  disabled?: boolean
  render?: ReactNode | ((...args: any) => ReactNode)
  rules?: FieldProps['rules']
  note?: ReactNode
  tooltip?: LabelTooltipType
  fieldProps?: { [key: string]: any }
}

export interface IProps<Styles> extends Omit<FieldProps, 'children'>, Omit<FormItemOption, 'controller' | 'render' | 'rules' | 'children' | 'name'>, FCWithStylesProps<Styles> {
  formRules?: { [key: string]: any }
  fieldRules?: FieldProps['rules']
  labelProps?: any
  controlProps?: any
}