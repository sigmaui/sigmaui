import React from 'react'
import type { FC } from 'react'
import classNames from 'classnames'
import { Field as RcFieldForm, FormInstance } from '@rc-component/form'
import { InternalNamePath, Meta } from '@rc-component/form/lib/interface'
import { FieldProps } from '@rc-component/form/lib/Field'
import { useStoreContext } from '@microui-kit/use-store'
import { getRestProps } from '@microui-kit/helpers'
import { withStyles } from '@sigmaui-kit/with-styles'

import FormItemLabel from '../FormItemLabel'
import FormItemControl from '../FormItemControl'

import { styles, type FormItemProps } from './styles'

import { FormItemType } from './types'

export type {
  FormItemType
}

const getIsRequired = ({ required, rules, form }: {
  required?: boolean,
  rules?: FieldProps['rules'],
  form: FormInstance
}) => {
  if (required !== undefined) {
    return required
  }

  if (rules) {
    return !!rules.some?.((rule) => {
      if (rule && typeof rule === 'object' && rule.required && !rule.warningOnly) {
        return true;
      }

      if (typeof rule === 'function') {
        const ruleEntity = rule(form);
        return ruleEntity?.required && !ruleEntity?.warningOnly;
      }
      return false;
    })
  }

  return false
}

const getFieldId = (namePath: InternalNamePath, formName?: string) => {
  if (!namePath.length) {
    return undefined;
  }

  const mergedId = namePath.join('_');

  if (formName) {
    return `${formName}_${mergedId}`;
  }

  return mergedId
}

const getRules = ({ t = (text: string) => text, type, required, formRules = {}, fieldRules = [] }: {
  t?: (text: string) => string,
  type?: string,
  required?: boolean,
  formRules?: { [key: string]: any },
  fieldRules?: FieldProps['rules'],
}) => {
  const hasRequired = fieldRules.some?.((rule) => 'required' in rule);

  const rulesByType = type && formRules?.[type] || [];

  console.log('rulesByType', rulesByType, type)

  const requiredRule = {
    required,
    message: t('form.message.required')
  };

  return [
    ...fieldRules,
    ...(hasRequired ? [] : [requiredRule]),
    ...rulesByType
  ]
}

const getStatus = ({ meta, validateStatus }: { meta?: Meta, validateStatus?: string }) => {
  if (validateStatus !== undefined) {
    return validateStatus
  }

  const validating = meta?.validating;

  if (validating) {
    return 'validating'
  }

  const errors = meta?.errors || [];

  if (errors.length > 0) {
    return 'error';
  }
}

const FormItem: FC<FormItemProps> = ({
  prefixCls,
  className,
  classes,
  t,
  label,
  name,
  type,
  children,
  required,
  disabled,
  note,
  formRules,
  fieldRules,
  fieldProps = {},
  labelProps = {},
  controlProps = {},
  ...formItemProps
}) => {
  const restProps = getRestProps(formItemProps);
  const { useStoreSelector } = useStoreContext();

  const formName = useStoreSelector((state: any) => state?.formName);

  // console.log('formName', formName);

  const rules = getRules({ t, type, required, formRules, fieldRules });

  return (
    <RcFieldForm
      name={name}
      rules={rules}
      {...restProps}
    >
      {(control, meta, form) => {
        const isRequired = getIsRequired({ required, rules, form });
        const fieldId = getFieldId(meta.name, formName);
        const status = getStatus({ meta });
        const errors = meta?.errors || [];
        const hasError = errors.length > 0;

        const childProps: React.ReactElement<any>['props'] = {
          disabled,
          status,
          ...fieldProps,
          ...(children?.props || {}),
          ...control
        };

        if (!childProps.id) {
          childProps.id = fieldId;
        }

        if (isRequired) {
          childProps['aria-required'] = 'true';
        }

        if (childProps.disabled) {
          childProps['aria-disabled'] = 'true';
        }

        return (
          <div className={classNames(prefixCls, className, classes?.wrapper, {
            ['has-error']: hasError
          })}>
            <FormItemLabel
              {...labelProps}
              id={`${fieldId}_label`}
              htmlFor={fieldId}
              required={isRequired}
            >
              {label}
            </FormItemLabel>
            {
              children
              &&
              <FormItemControl
                {...controlProps}
                fieldId={fieldId}
                formItemPrefixCls={prefixCls}
                meta={meta}
                note={note}
              >
                {React.cloneElement(children, childProps)}
              </FormItemControl>
            }
          </div>
        )
      }}
    </RcFieldForm>
  )
}

FormItem.displayName = 'FormItem'

export default withStyles<FormItemProps>(styles)(FormItem)
