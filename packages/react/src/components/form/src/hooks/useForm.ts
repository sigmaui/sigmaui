import React, { useEffect, useMemo } from 'react';
import { useForm as useRcForm, type FormInstance as RcFormInstance } from '@rc-component/form';
import { useStore, StoreMethods } from '@microui-kit/use-store';
import type { NamePath } from '@rc-component/form/lib/interface';

import type { StoreInitialState } from '../Form/types';

export type FieldValues = Record<string, any>;
export type SubmitHandler<T> = (data: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;
export type SubmitErrorHandler<T> = (errors: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;

export type UseFormHandleSubmit<TFieldValues = any, TTransformedValues = TFieldValues> = (onValid: SubmitHandler<TTransformedValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export interface FormInstance<Values = any> extends RcFormInstance<Values> {
  name?: string;
  storeKey?: string;
  scrollToField?: (name: NamePath, options?: ScrollOptions) => void;
  focusField?: (name: NamePath) => void;
  getFieldInstance?: (name: NamePath) => any;
  handleSetFieldValue: (name: NamePath, value: any, params?: { isValidateField?: boolean }) => any;
  handleSubmit: UseFormHandleSubmit<Values, any>;
  storeMethods: StoreMethods<any>;
}

export function useForm<Values = any, T extends StoreInitialState = any>(params: {
  name: string
  form?: FormInstance<Values>,
  storeKey?: string
  initialState?: T
}): [FormInstance<Values>] {
  const [rcForm] = useRcForm();
  const { name, form, initialState } = params;

  let storeKey = params.storeKey || form?.storeKey;

  if (!storeKey) {
    storeKey = `form-store:${name}`;
  }

  const storeMethods: StoreMethods<T> = useStore<T>({
    storeKey,
    initialState: {
      formName: name,
      ...initialState
    } as T,
    handlers: ({ setState }) => {
      return {
        updateState: (dataState: any) => {
          setState(dataState);
        },
        updateFieldChange: (key: any) => {
          setState(({ changedFields = {} }) => {
            if (typeof key === 'object') {
              return {
                ...changedFields,
                ...key
              }
            }

            return {
              ...changedFields,
              [key]: true
            }
          });
        }
      };
    }
  });

  useEffect(() => {
    storeMethods.setState(initialState as any)
  }, [initialState])

  const wrapForm: FormInstance<Values> = useMemo(() => {
    const newForm = form ?? {
      name,
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
            isSubmitting: true
          } as any);

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
            isSubmitting: false
          } as any);
        }
      },
      storeMethods
    };

    storeMethods.setState({
      form: newForm
    } as any);

    return newForm
  }, [form, rcForm])

  return [wrapForm]
}

export default useForm