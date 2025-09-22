import React, { ReactNode } from 'react';
import type { FieldProps } from '@rc-component/form/lib/Field';
import type { RuleObject, Meta } from '@rc-component/form/lib/interface';
import type { FCWithStylesProps, StylesProperties, IStylesProps } from '@sigmaui-kit/types';

import type { LabelTooltipType } from '../FormItemLabel/types';
import type { FormInstance } from '../hooks/useForm';

export type { StylesProperties };

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

export interface ValidateMessages {
  required?: string
  email?: string
  url?: string
}

export interface FieldArgs {
  form?: FormInstance
}

export interface OnChangeArgs extends FieldArgs {
  value?: any
  preValue?: any
}

export interface ValidateFieldArgs extends FieldArgs {
  form?: FormInstance
}

export interface ChildProps {
  [name: string]: any;
}

export type FieldChildrenType = React.ReactElement | ((control: ChildProps, meta: Meta, form: FormInstance) => React.ReactNode);

export interface FormItemOption<Styles = any> extends FieldProps, IStylesProps<Styles> {
  name: string
  label?: ReactNode
  type?: FormItemType
  required?: boolean | RuleObject
  disabled?: boolean
  noStyle?: boolean
  render?: ReactNode | ((...args: any) => ReactNode)
  rules?: FieldProps['rules']
  note?: ReactNode
  tooltip?: LabelTooltipType
  validateMessages?: ValidateMessages
  fieldProps?: { [key: string]: any }
  labelProps?: { [key: string]: any }
  controlProps?: { [key: string]: any },
  onChange?: ({ form, preValue }: OnChangeArgs) => any
  validateField?: ({ form }: ValidateFieldArgs) => any
  shouldUpdateKey?: string | string[]
  autoResetValue?: null | number | boolean | ''
}

export interface IProps<Styles> extends Omit<FieldProps, 'children'>, Omit<FormItemOption, 'controller' | 'render' | 'rules' | 'children' | 'name' | '_style' | 'extendStyle'>, FCWithStylesProps<Styles> {
  formRules?: { [key: string]: any }
  fieldRules?: FieldProps['rules']
}