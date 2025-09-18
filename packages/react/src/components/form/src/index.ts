import InternalForm, { useForm, useWatch } from './Form';
import FormItem from './FormItem';
import { FormItemTypeEnum, type FormItemType, type FormItemOption } from './FormItem/types';

export * from './helpers';

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  useForm: typeof useForm;
  useWatch: typeof useWatch;
  Item: typeof FormItem;
};

const Form = InternalForm as CompoundedComponent;

Form.Item = FormItem;

export {
  FormItemTypeEnum
}

export type {
  FormItemType,
  FormItemOption
}

export default Form