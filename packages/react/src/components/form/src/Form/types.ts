import type { ReactNode } from 'react';
import type { FormProps } from '@rc-component/form';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

import type { FormItemOption } from '../FormItem/types';
import type { FormInstance } from '../hooks/useForm';

export type { StylesProperties }

export interface StoreInitialState {
  form?: FormInstance
  formName?: string
  isAutoTrim?: boolean
  isBlurAutoValidate?: boolean
  isDirty?: boolean
  changedFields?: { [key: string]: boolean }
  validateIcons?: IProps<any>['validateIcons']
  isSubmitting?: boolean
}

export interface RenderControlArgs {
  type?: FormItemOption['type']
}

type RenderProps = ({ form, isSubmitting }: {
  form?: FormInstance,
  isSubmitting: StoreInitialState['isSubmitting']
  isDirty: StoreInitialState['isDirty']
}) => ReactNode;

export interface IProps<Styles, Values = any> extends Omit<FormProps, 'children'>, Omit<FCWithStylesProps<Styles>, 'children'> {
  name: string
  form?: FormInstance<Values>
  items?: FormItemOption[]
  customRenderItem?: (args: RenderControlArgs) => ReactNode
  formRules?: { [key: string]: any }
  validateIcons?: { [key: string]: ReactNode }
  disabled?: boolean
  isAutoTrim?: boolean
  isBlurAutoValidate?: boolean
  onFinish?: (values: Values) => unknown | Promise<unknown>
  children?: RenderProps | ReactNode
  layout?: { col?: number, space?: number }
}
