import type { ReactNode } from 'react';
import type { FormProps } from '@rc-component/form';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

import type { FormItemOption } from '../FormItem/types';
import type { FormInstance } from '../hooks/useForm';

export type { StylesProperties };

export interface StoreInitialState {
  form?: FormInstance;
  formName?: string;
  isDirty?: boolean;
  isSubmitting?: boolean;
  changedFields?: { [key: string]: boolean };
  isAutoTrim?: boolean;
  isBlurAutoValidate?: boolean;
  validateIcons?: IProps<any>['validateIcons'];
}

export interface RenderControlArgs {
  type?: FormItemOption['type'];
}

type RenderProps = ({
  form,
  isSubmitting,
}: {
  form?: FormInstance;
  isSubmitting: StoreInitialState['isSubmitting'];
  isDirty: StoreInitialState['isDirty'];
}) => ReactNode;

type Props<Values> =
  | {
      name: string;
      form?: undefined;
    }
  | {
      name?: string;
      form: FormInstance<Values>;
    };

interface BaseProps<Styles, Values> extends Omit<FormProps, 'children'>, Omit<FCWithStylesProps<Styles>, 'children'> {
  items?: FormItemOption[];
  customRenderItem?: (args: RenderControlArgs) => ReactNode;
  formRules?: { [key: string]: any };
  validateIcons?: { [key: string]: ReactNode };
  disabled?: boolean;
  isAutoTrim?: boolean;
  isBlurAutoValidate?: boolean;
  onFinish?: (values: Values) => unknown | Promise<unknown>;
  children?: RenderProps | ReactNode;
  layout?: { col?: number; space?: number };
}

export type IProps<Styles, Values = any> =
  | (BaseProps<Styles, Values> & { form?: FormInstance<Values>; name: string })
  | (BaseProps<Styles, Values> & { form: FormInstance<Values>; name?: string });
