import React, { useCallback } from 'react';
import { useForm as useRcForm, type FormInstance as RcFormInstance } from '@rc-component/form';
import { useStore, StoreMethods } from '@microui-kit/use-store';
import type { NamePath } from '@rc-component/form/lib/interface';

export type FieldValues = Record<string, any>;
export type SubmitHandler<T> = (data: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;
export type SubmitErrorHandler<T> = (errors: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;

export type UseFormHandleSubmit<TFieldValues = any, TTransformedValues = TFieldValues> = (onValid: SubmitHandler<TTransformedValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;


export interface FormInstance<Values = any> extends RcFormInstance<Values> {
  storeKey?: string;
  scrollToField?: (name: NamePath, options?: ScrollOptions) => void;
  focusField?: (name: NamePath) => void;
  getFieldInstance?: (name: NamePath) => any;
  handleSubmit?: UseFormHandleSubmit<Values, any>;
  storeMethods?: StoreMethods<any>;
}

export default function useForm<Values = any, T extends object = any>(form?: FormInstance<Values>, params: {
  storeKey?: string
  initialState?: T
} = {}): [FormInstance<Values>, StoreMethods<T>] {
  const [rcForm] = useRcForm();
  const { initialState } = params;

  const storeKey = params.storeKey || form?.storeKey;

  const storeMethods: StoreMethods<T> = useStore<T>({
    storeKey,
    initialState
  });

  const handleSubmit: UseFormHandleSubmit<Values, any> = useCallback((onValid, onInvalid) => {
    return async (e) => {
      if (e) {
        e.preventDefault();
      }

      try {
        await rcForm.validateFields();

        const values = rcForm.getFieldsValue();

        if (onValid) {
          await onValid(values, e);
        }
      } catch (errorInfo) {
        if (onInvalid) {
          await onInvalid(errorInfo as Values, e);
        }
      }
    }
  }, []);

  const wrapForm: FormInstance<Values> = React.useMemo(() => {
    const newForm = form ?? {
      storeKey,
      ...rcForm,
      scrollToField: (name: NamePath) => {
      },
      focusField: (name: NamePath) => {
      },
      getFieldInstance: (name: NamePath) => {
      },
      handleSubmit,
      storeMethods
    };

    storeMethods.setState({
      form: newForm
    } as any);

    return newForm
  }, [form, rcForm])

  return [wrapForm, storeMethods]
}