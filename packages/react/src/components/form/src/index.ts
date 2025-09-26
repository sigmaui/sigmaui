import InternalForm, { type FormProps, FormProvider, useWatch } from './Form';
import FormItem from './FormItem';
import useForm from './hooks/useForm';
import { type FormItemOption, type FormItemType, FormItemTypeEnum } from './FormItem/types';

export * from './helpers';

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
  Provider: typeof FormProvider;
  Item: typeof FormItem;
  useForm: typeof useForm;
  useWatch: typeof useWatch;
};

const Form = InternalForm as CompoundedComponent;

Form.Provider = FormProvider;
Form.Item = FormItem;
Form.useForm = useForm;
Form.useWatch = useWatch;

export { FormProvider, FormItem, useForm, useWatch, FormItemTypeEnum };

export type { FormProps, FormItemType, FormItemOption };

export default Form;
