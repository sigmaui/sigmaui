import React, { useEffect, useMemo } from 'react';
import { useForm as useRcForm, type FormInstance as RcFormInstance } from '@rc-component/form';
import type { NamePath, Meta } from '@rc-component/form/lib/interface';
import { useStore, StoreMethods } from '@microui-kit/use-store';

import type { StoreInitialState } from '../Form/types';

export type FieldValues = Record<string, any>;
export type SubmitHandler<T> = (data: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;
export type SubmitErrorHandler<T> = (errors: T, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>;

export type UseFormHandleSubmit<TFieldValues = any, TTransformedValues = TFieldValues> = (onValid: SubmitHandler<TTransformedValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export interface FormInstance<Values = any> extends RcFormInstance<Values> {
  name?: string;
  storeKey?: string;
  getChangedFields: () => any;
  getChangedValues: () => any;
  scrollToField?: (name: NamePath, options?: ScrollOptions) => void;
  focusField?: (name: NamePath) => void;
  getFieldInstance?: (name: NamePath) => any;
  handleSetFieldValue: (name: NamePath, value: any, params?: { isValidateField?: boolean }) => any;
  handleSubmit: UseFormHandleSubmit<Values, any>;
  storeMethods: StoreMethods<any, any>;
}

type UseFormParams<Values, T> =
  | { initialState?: T } & { name: string; form?: FormInstance<Values> }
  | { initialState?: T } & { name?: string; form: FormInstance<Values> }

export interface Handlers {
  updateState: (key: any) => void
  updateFieldChange: (key: any) => void
}

function getName(name: string | NamePath) {
  if (typeof name === 'string' && name.includes('.')) {
    name = name.split('.')
  }

  return name
}

export function useForm<Values = any, T extends StoreInitialState = any>(params: UseFormParams<Values, T>): [FormInstance<Values>] {
  const [rcForm] = useRcForm();
  const { form, initialState } = params;

  const name = form?.name || params.name;
  let storeKey = form?.storeKey;

  if (!storeKey) {
    storeKey = `form-store:${name}`;
  }

  const storeMethods: StoreMethods<T, Handlers> = useStore<T>({
    storeKey,
    initialState: {
      formName: name,
      isSubmitting: false,
      isDirty: false,
      changedFields: {},
      ...initialState
    } as T,
    handlers: ({ setState }) => {
      return {
        updateState: (dataState: any) => {
          setState(dataState);
        },
        updateFieldChange: (key: Meta['name']) => {
          setState(({ changedFields }) => {
            if (Array.isArray(key)) {
              return {
                changedFields: {
                  ...changedFields,
                  [key.join('.')]: true
                }
              } as Partial<T>
            }

            return {
              changedFields: {
                ...changedFields,
                [key]: true
              }
            } as Partial<T>
          });
        }
      };
    }
  });

  useEffect(() => {
    storeMethods.setState(initialState as T)
  }, [JSON.stringify(initialState)])

  const wrapForm: FormInstance<Values> = useMemo(() => {
    let newForm: FormInstance;

    if (form) {
      newForm = form
    } else {
      const getFieldValue = rcForm.getFieldValue;
      const setFieldValue = rcForm.setFieldValue;
      const getFieldError = rcForm.getFieldError;
      const getFieldWarning = rcForm.getFieldWarning;

      newForm = {
        name,
        storeKey,
        ...rcForm,
        getFieldValue: (name: string | NamePath) => {
          return getFieldValue(getName(name))
        },
        setFieldValue: (name: string | NamePath, value) => {
          return setFieldValue(getName(name), value)
        },
        getFieldError: (name: string | NamePath) => {
          return getFieldError(getName(name))
        },
        getFieldWarning: (name: string | NamePath) => {
          return getFieldWarning(getName(name))
        },
        getChangedFields: () => {
          const storeState = storeMethods.getState();
          return storeState?.changedFields;
        },
        getChangedValues: () => {
          const storeState = storeMethods.getState();
          const changedFields = storeState?.changedFields;

          return wrapForm.getFieldsValue(true, (meta) => {
            const name = meta?.name.join('.');

            // console.log('meta', meta);

            if (!name) {
              return false
            }

            return changedFields[name];
          })
        },
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
            } as T);

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
            } as T);
          }
        },
        storeMethods
      };
    }

    console.log('newForm', newForm)

    storeMethods.setState({
      form: newForm
    } as T);

    return newForm
  }, [form, rcForm])

  return [wrapForm]
}

export default useForm