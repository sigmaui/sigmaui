import type { VueFormApi } from '@tanstack/vue-form';
import type { FCWithStylesProps, FCDefaultProps } from '@packages/vue/types';
import type { Classes } from '@sigmaui-kit/use-stylex';
import type { FormTypes } from 'packages/common/components/form/xStyles';

export interface FormItem {
  name: string;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  validators?: any;
}

export interface FormProps<Styles> extends FCWithStylesProps<Styles> {
  items?: FormItem[];
  submitText?: string
}

export interface FormFieldProps extends FCDefaultProps {
  item: FormItem;
  classes: Classes<FormTypes>;
  form: VueFormApi<any, any, any, any, any, any, any, any, any, any>;
}