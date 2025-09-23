import React, { useCallback } from 'react';
import { useForm as useRcForm, type FormInstance as RcFormInstance } from '@rc-component/form';
import { useStore, StoreMethods } from '@microui-kit/use-store';
import type { Meta, NamePath } from '@rc-component/form/lib/interface';

export type FieldValues = Record<string, any>;
export type SubmitHandler<T> = (data: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;
export type SubmitErrorHandler<T> = (errors: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;

export type UseFormHandleSubmit<TFieldValues = any, TTransformedValues = TFieldValues> = (onValid: SubmitHandler<TTransformedValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export interface FormInstance<Values = any> extends RcFormInstance<Values> {
  storeKey?: string;
  scrollToField?: (name: NamePath, options?: ScrollOptions) => void;
  focusField?: (name: NamePath) => void;
  getFieldInstance?: (name: NamePath) => any;
  handleSetFieldValue: (name: NamePath, value: any, params?: { isValidateField?: boolean }) => any;
  handleSubmit: UseFormHandleSubmit<Values, any>;
  storeMethods?: StoreMethods<any>;
}

export function useForm<Values = any, T extends object = any>(form?: FormInstance<Values>, params: {
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
      handleSetFieldValue: (name: NamePath, value: any, params: { isValidateField?: boolean } = {}) => {
        const { isValidateField } = params;

        wrapForm.setFieldValue(name, value);

        if (isValidateField) {
          wrapForm.validateFields(name);
        }
      },
      handleSubmit: (onValid, onInvalid) => {
        return async (e) => {
          if (e) {
            e.preventDefault();
          }

          storeMethods.setState({
            // @ts-ignore
            isSubmitting: true
          });

          try {
            const values = await wrapForm.validateFields();

            console.log('validateFields', values)

            if (onValid) {
              await onValid(values, e);
            }
          } catch (errorInfo) {
            console.log('validateFields errorInfo', errorInfo)

            if (onInvalid) {
              await onInvalid(errorInfo as Values, e);
            }
          }

          storeMethods.setState({
            // @ts-ignore
            isSubmitting: false
          });
        }
      },
      storeMethods
    };

    storeMethods.setState({
      form: newForm
    } as any);

    return newForm
  }, [form, rcForm])

  return [wrapForm, storeMethods]
}

export default useForm