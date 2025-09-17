import React, { Fragment, useMemo } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import RcForm, { useWatch } from '@rc-component/form';
import { ValidateErrorEntity } from '@rc-component/form/lib/interface';
import { StoreProvider } from '@microui-kit/use-store';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';

import { styles, type FormProps } from './styles';
import { StoreProviderProps } from './types';

import FormItem from '../FormItem';
import useForm from '../hooks/useForm';

export {
  useForm,
  useWatch
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
  customRender,
  formRules: customFormRules,
  disabled,
  isAutoTrim = true,
  ...formProps
}) => {
  const restProps = getRestProps(formProps)

  const [form] = useForm(customForm);

  let formRules = customFormRules;

  if (typeof customFormRules === 'function') {
    formRules = customFormRules?.({ t })
  }

  const renderChildren = useMemo(() => {
    return (
      <Fragment>
        {
          items.map(({ name, type, label, render, rules, ...formItemProps }) => {
            let childNode: React.ReactNode = null;

            if (render) {
              childNode = typeof render === 'function' ? render({ form }) : render;
            } else {
              if (type && customRender) {
                childNode = customRender({ type })
              }
            }

            return (
              <FormItem
                name={name}
                type={type}
                label={label}
                formRules={formRules}
                fieldRules={rules}
                disabled={disabled}
                {...formItemProps}
              >
                {childNode}
              </FormItem>
            )
          })
        }
        {children}
      </Fragment>
    )
  }, [children, items])

  return (
    <StoreProvider<StoreProviderProps>
      storeKey={`${prefixCls}:${name || 'store'}`}
      initialState={{
        formName: name,
        form,
        isAutoTrim
      }}
    >
      <RcForm
        id={name}
        name={name}
        form={form}
        className={classNames(prefixCls, className, classes?.wrapper)}
        {...restProps}
      >
        {renderChildren}
      </RcForm>
    </StoreProvider>
  )
}

Form.displayName = 'Form'

export default withStyles<FormProps>(styles)(Form)
