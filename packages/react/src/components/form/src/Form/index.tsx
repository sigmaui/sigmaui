import React, { Fragment, useCallback, useMemo } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcForm, { FormProvider, useWatch } from '@rc-component/form';
import type { FormProps as RcFormProps } from '@rc-component/form';
import { FieldProps, ShouldUpdate } from '@rc-component/form/lib/Field';
import { StoreProvider, useStoreContext } from '@microui-kit/use-store';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';
import { Locales } from '@sigmaui-kit/locale';

import { type FormProps, styles } from './styles';
import { StoreInitialState } from './types';
import { checkShouldUpdate, getValidateMessage } from '../helpers';

import FormItem from '../FormItem';
import useForm, { type FormInstance } from '../hooks/useForm';

export { FormProvider, useForm, useWatch };

export type { FormProps };

const Children = ({ children, className }: { children?: FormProps['children']; className?: string }) => {
  const { useStoreSelector } = useStoreContext<StoreInitialState>();

  const form = useStoreSelector((state) => state.form);
  const isSubmitting = useStoreSelector((state) => state.isSubmitting);
  const isDirty = useStoreSelector((state) => state.isDirty);

  if (typeof children === 'function') {
    children = children({ form, isSubmitting, isDirty });
  }

  return <div className={className}>{children}</div>;
};

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
  isBlurAutoValidate,
  onFinish: onFinishCustom,
  initialValues,
  layout,
  ...formProps
}) => {
  const restProps = getRestProps(formProps);

  const initialState: StoreInitialState = {
    isAutoTrim,
    isBlurAutoValidate,
    validateIcons,
  };

  const [form] = useForm<any, StoreInitialState>({
    name,
    form: customForm,
    initialState,
  } as any);

  const storeMethods = form.storeMethods;

  // console.log('storeMethods', storeMethods);

  let formRules = customFormRules;

  if (typeof customFormRules === 'function') {
    formRules = customFormRules?.({ t });
  }

  const onFinish: RcFormProps['onFinish'] = async (values) => {
    storeMethods.setState({
      isSubmitting: true,
    });

    await onFinishCustom?.(values);

    storeMethods.setState({
      isSubmitting: false,
    });
  };

  const getChildNode = useCallback(
    ({ render, type }) => {
      let childNode: React.ReactNode = null;

      if (render) {
        childNode = typeof render === 'function' ? render({ form }) : render;
      } else {
        if (customRenderItem) {
          childNode = customRenderItem({ type });
        }
      }

      return childNode;
    },
    [customRenderItem],
  );

  const renderChildren = useMemo(() => {
    return (
      <Fragment>
        {items.map((item) => {
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
            disabled,
          };

          let shouldUpdateFunc: ShouldUpdate | undefined;

          if (shouldUpdate) {
            shouldUpdateFunc = shouldUpdate;
          } else {
            const isAutoResetValue = item.hasOwnProperty('autoResetValue');

            shouldUpdateFunc = (prevValues, currentValues, info) =>
              checkShouldUpdate(shouldUpdateKey, prevValues, currentValues, {
                info,
                form,
                name,
                isAutoResetValue,
                autoResetValue,
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
                      );
                    }
                  }) as FieldProps['children']
                }
              </FormItem>
            );
          }

          return (
            <FormItem
              {...itemProps}
              {...formItemProps}
            >
              {childNode}
            </FormItem>
          );
        })}
        <Children className={classNames(`${prefixCls}-extra`, classes?.extra)}>{children}</Children>
      </Fragment>
    );
  }, [children, items]);

  const { validateMessages = {} } = restProps;

  const defaultValidateMessages = useMemo(() => {
    return {
      required: getValidateMessage({
        t,
        key: Locales.Form.message.required,
        defaultValue: 'is required',
      }),
      types: {
        email: getValidateMessage({
          t,
          key: Locales.Form.message.email.invalid,
          defaultValue: 'is invalid',
        }),
        url: getValidateMessage({
          t,
          key: Locales.Form.message.url.invalid,
          defaultValue: 'is invalid',
        }),
      },
    };
  }, []);

  const formName = form?.name;

  return (
    <StoreProvider<StoreInitialState>
      storeKey={form.storeKey}
      handlers={storeMethods.handlers}
    >
      <RcForm
        id={formName}
        name={formName}
        form={form}
        className={classNames(prefixCls, className, classes?.wrapper)}
        {...restProps}
        onFinish={onFinish}
        initialValues={initialValues}
        validateMessages={{
          ...defaultValidateMessages,
          ...validateMessages,
        }}
      >
        {renderChildren}
      </RcForm>
    </StoreProvider>
  );
};

Form.displayName = 'Form';

export default withStyles<FormProps>(styles)(Form);
