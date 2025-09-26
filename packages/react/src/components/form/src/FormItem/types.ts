import React, { ReactNode } from 'react';
import type { FieldProps } from '@rc-component/form/lib/Field';
import type { Meta, RuleObject } from '@rc-component/form/lib/interface';
import type { FCWithStylesProps, IStylesProps, StylesProperties } from '@sigmaui-kit/types';

import type { FormItemLabelProps } from '../FormItemLabel';
import type { FormItemControlProps } from '../FormItemControl';
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
  SWITCH = 'switch',
  SELECT = 'select',
  TAG = 'tag',
}

export type FormItemType = `${FormItemTypeEnum}` | (string & {});

export interface ValidateMessages {
  required?: string;
  email?: string;
  url?: string;
}

export interface FieldArgs {
  form?: FormInstance;
}

export interface OnChangeArgs extends FieldArgs {
  value?: any;
  preValue?: any;
}

export interface ValidateFieldArgs extends FieldArgs {
  form?: FormInstance;
}

export interface ChildProps {
  [name: string]: any;
}

export type FieldChildrenType =
  | React.ReactElement
  | ((control: ChildProps, meta: Meta, form: FormInstance) => React.ReactNode);

export interface FormItemOption<
  Styles = any,
  IFieldProps = {
    [key: string]: any;
  },
> extends FieldProps,
    IStylesProps<Styles> {
  name: string | FieldProps['name'];
  label?: ReactNode;
  type?: FormItemType;
  required?: boolean | RuleObject;
  disabled?: boolean;
  defaultValue?: any;
  noStyle?: boolean;
  render?: ReactNode | ((...args: any) => ReactNode);
  rules?: FieldProps['rules'];
  note?: ReactNode;
  tooltip?: LabelTooltipType;
  validateMessages?: ValidateMessages;
  fieldProps?: IFieldProps;
  labelProps?: FormItemLabelProps;
  controlProps?: FormItemControlProps;
  onChange?: ({ form, preValue }: OnChangeArgs) => any;
  validateField?: ({ form }: ValidateFieldArgs) => any;
  shouldUpdateKey?: string | string[];
  autoResetValue?: null | number | boolean | '';
}

export interface IProps<Styles>
  extends Omit<FieldProps, 'children' | 'name'>,
    Omit<FormItemOption, 'controller' | 'render' | 'rules' | 'name' | 'children' | '_style' | 'extendStyle'>,
    FCWithStylesProps<Styles> {
  name?: string | FieldProps['name'];
  formRules?: { [key: string]: FieldProps['rules'] };
  fieldRules?: FieldProps['rules'];
}
