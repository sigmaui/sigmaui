import React, { Fragment, useMemo, useCallback } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcForm, { useWatch } from '@rc-component/form';
import type { FormProps as RcFormProps } from '@rc-component/form';
import { FieldProps, ShouldUpdate } from '@rc-component/form/lib/Field';
import { StoreProvider, useStoreContext } from '@microui-kit/use-store';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import { Locales } from '@sigmaui-kit/locale';

import { getValidateMessage, checkShouldUpdate } from '../helpers';

import { styles, type FormProps } from './styles';
import { StoreProviderProps } from './types';

import FormItem from '../FormItem';
import useForm, { type FormInstance } from '../hooks/useForm';

export {
  useForm,
  useWatch
}

const Children = ({ children }: { children?: FormProps['children'] }) => {
  const { useStoreSelector } = useStoreContext<StoreProviderProps>();

  const form = useStoreSelector((state) => state.form);
  const isSubmitting = useStoreSelector((state) => state.isSubmitting);

  if (typeof children === 'function') {
    children = children({ form, isSubmitting })
  }

  return children
}

const Form: FC<FormProps> = ({
  prefixCls,
  className,
  classes,
  children,
  t,
  name,
  form: customForm,
  items = [],
  customRenderItem,
  formRules: customFormRules,
  validateIcons,
  disabled,
  isAutoTrim = true,
  onFinish: onFinishCustom,
  initialValues,
  ...formProps
}) => {
  const restProps = getRestProps(formProps);

  const initialState: StoreProviderProps = {
    formName: name,
    isAutoTrim,
    validateIcons,
    isSubmitting: false
  };

  const storeKey = `${prefixCls}:${name || 'store'}`;

  const [form, storeMethods] = useForm<any, StoreProviderProps>(customForm, {
    storeKey,
    initialState
  });

  // console.log('storeMethods', storeMethods);

  let formRules = customFormRules;

  if (typeof customFormRules === 'function') {
    formRules = customFormRules?.({ t })
  }

  const onFinish: RcFormProps['onFinish'] = async (values) => {
    const storeState = storeMethods.getState();

    storeMethods.setState({
      isSubmitting: true
    });

    await onFinishCustom?.(values);

    storeMethods.setState({
      isSubmitting: false
    });
  };

  const getChildNode = useCallback(({ render, type }) => {
    let childNode: React.ReactNode = null;

    if (render) {
      childNode = typeof render === 'function' ? render({ form }) : render;
    } else {
      if (customRenderItem) {
        childNode = customRenderItem({ type })
      }
    }

    return childNode
  }, [customRenderItem])

  const renderChildren = useMemo(() => {
    return (
      <Fragment>
        {
          items.map((item) => {
            const {
              name,
              type,
              render,
              rules,
              validateField,
              shouldUpdate,
              shouldUpdateKey,
              autoResetValue,
              ...formItemProps
            } = item;

            let childNode = getChildNode({ render, type });

            const itemProps = {
              name,
              type,
              formRules,
              fieldRules: rules,
              disabled
            }

            let shouldUpdateFunc: ShouldUpdate | undefined;

            if (shouldUpdate) {
              shouldUpdateFunc = shouldUpdate;
            } else {
              const isAutoResetValue = item.hasOwnProperty('autoResetValue');

              shouldUpdateFunc = (prevValues, currentValues, info) => checkShouldUpdate(shouldUpdateKey, prevValues, currentValues, {
                info,
                form,
                name,
                isAutoResetValue,
                autoResetValue
              });
            }

            if (validateField && shouldUpdateFunc) {
              return (
                <FormItem
                  noStyle
                  shouldUpdate={shouldUpdateFunc}
                >
                  {
                    ((control, meta, form: FormInstance) => {
                      const validate = validateField({ form });

                      if (validate) {
                        const { render, ...validateProps } = validate;

                        const type = validateProps.type;

                        if (type || render) {
                          childNode = getChildNode({ render, type });
                        }

                        return (
                          <FormItem
                            {...itemProps}
                            {...formItemProps}
                            {...validateProps}
                          >
                            {childNode}
                          </FormItem>
                        )
                      }
                    }) as FieldProps['children']
                  }
                </FormItem>
              )
            }

            return (
              <FormItem
                {...itemProps}
                {...formItemProps}
              >
                {childNode}
              </FormItem>
            )
          })
        }
        <Children>
          {children}
        </Children>
      </Fragment>
    )
  }, [children, items]);

  const { validateMessages = {} } = restProps;

  const defaultValidateMessages = useMemo(() => {
    return {
      required: getValidateMessage({
        t,
        key: Locales.Form.message.required,
        defaultValue: 'is required'
      }),
      types: {
        email: getValidateMessage({
          t,
          key: Locales.Form.message.email.invalid,
          defaultValue: 'is invalid'
        }),
        url: getValidateMessage({
          t,
          key: Locales.Form.message.url.invalid,
          defaultValue: 'is invalid'
        })
      }
    }
  }, []);

  return (
    <StoreProvider<StoreProviderProps>
      storeKey={storeKey}
    >
      <RcForm
        id={name}
        name={name}
        form={form}
        className={classNames(prefixCls, className, classes?.wrapper)}
        {...restProps}
        onFinish={onFinish}
        initialValues={initialValues}
        validateMessages={{
          ...defaultValidateMessages,
          ...validateMessages
        }}
      >
        {renderChildren}
      </RcForm>
    </StoreProvider>
  )
}

Form.displayName = 'Form';

export default withStyles<FormProps>(styles)(Form)
