import type { ReactNode } from 'react';
import type { FieldProps } from '@rc-component/form/lib/Field';
import type { RuleObject } from '@rc-component/form/lib/interface';
import type { FCWithStylesProps, StylesProperties, IStylesProps } from 'packages/common/types';

import type { LabelTooltipType } from '../FormItemLabel/types';

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

export interface FormItemOption<Styles = any> extends IStylesProps<Styles> {
  name: string
  label?: ReactNode
  type?: FormItemType
  required?: boolean | RuleObject
  disabled?: boolean
  render?: ReactNode | ((...args: any) => ReactNode)
  rules?: FieldProps['rules']
  note?: ReactNode
  tooltip?: LabelTooltipType
  validateMessages?: ValidateMessages
  fieldProps?: { [key: string]: any }
  labelProps?: { [key: string]: any }
  controlProps?: { [key: string]: any }
}

export interface IProps<Styles> extends Omit<FieldProps, 'children'>, Omit<FormItemOption, 'controller' | 'render' | 'rules' | 'children' | 'name' | '_style' | 'extendStyle'>, FCWithStylesProps<Styles> {
  formRules?: { [key: string]: any }
  fieldRules?: FieldProps['rules']
}