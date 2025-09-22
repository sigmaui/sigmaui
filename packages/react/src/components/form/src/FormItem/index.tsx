import React, { Fragment, useCallback } from 'react';
import type { FC } from 'react';
import classNames from 'classnames';
import { Field as RcFieldForm } from '@rc-component/form';
import type { InternalNamePath, Meta, RuleObject, EventArgs, StoreValue } from '@rc-component/form/lib/interface';
import { FieldProps } from '@rc-component/form/lib/Field';
import { useStoreContext } from '@microui-kit/use-store';
import { getRestProps } from '@microui-kit/helpers';
import { withStyles } from '@sigmaui-kit/with-styles';

import { isObject, getValueFromEvent } from '../helpers';

import FormItemLabel from '../FormItemLabel';
import FormItemControl from '../FormItemControl';
import { FormInstance } from '../hooks/useForm';

import { styles, type FormItemProps } from './styles';

import { type FormItemType, FormItemTypeEnum, type FormItemOption, type FieldChildrenType } from './types';
import { StoreProviderProps } from '../Form/types';

export type {
  FormItemType,
  FormItemProps
}

const getIsRequired = ({ required, rules, form }: {
  required?: boolean | RuleObject,
  rules?: FieldProps['rules'],
  form: FormInstance
}) => {
  if (required !== undefined) {
    return Boolean(required)
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

const getRules = ({
  type,
  required,
  formRules = {},
  fieldRules = [],
  validateMessages = {}
}: {
  // t?: WithTranslation['t'],
  // label?: FormItemOption['label'],
  // name?: FormItemOption['name'],
  type?: FormItemOption['type'],
  required?: boolean | RuleObject,
  formRules?: { [key: string]: any },
  fieldRules?: FieldProps['rules'],
  validateMessages?: FormItemOption['validateMessages'],
}) => {
  const hasRequired = fieldRules.some?.((rule) => 'required' in rule);

  const rulesByType = type && formRules?.[type] || [];

  // console.log('rulesByType', rulesByType, type);

  let requiredRule: any;

  if (!hasRequired) {
    if (typeof required === 'boolean') {
      requiredRule = {
        required,
        message: validateMessages.required
      }
    } else {
      if (isObject(required)) {
        requiredRule = {
          required: true,
          message: validateMessages.required,
          ...required
        }
      }
    }
  }

  const allRules = [
    ...fieldRules,
    ...(hasRequired ? [] : [requiredRule]),
    ...rulesByType
  ];

  if (rulesByType.length === 0) {
    if (type === FormItemTypeEnum.EMAIL) {
      allRules.push({
        type,
        message: validateMessages.email
      })
    }

    if (type === FormItemTypeEnum.URL) {
      allRules.push({
        type,
        message: validateMessages.url
      })
    }
  }

  return allRules
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
  validateMessages = {},
  tooltip,
  validateField,
  noStyle,
  onChange: onChangeCustom,
  valuePropName,
  getValueFromEvent: getValueFromEventCustom,
  ...formItemProps
}) => {
  const restProps = getRestProps(formItemProps);
  const { useStoreSelector, handlers } = useStoreContext<StoreProviderProps>();

  const form = useStoreSelector((state) => state.form);
  const formName = useStoreSelector((state) => state.formName);
  const isAutoTrim = useStoreSelector((state) => state.isAutoTrim);

  const rules = getRules({ type, required, formRules, fieldRules, validateMessages });

  console.log('form FormItem', form)

  const { messageVariables = {} } = restProps;

  let renderChildren: FieldChildrenType;

  if (noStyle) {
    renderChildren = children
  } else {
    renderChildren = (control, meta, form) => {
      const isRequired = getIsRequired({ required, rules, form });
      const fieldId = getFieldId(meta.name, formName);
      const status = getStatus({ meta });
      const errors = meta?.errors || [];
      const hasError = errors.length > 0;

      const onChange = (...args: EventArgs) => {
        // console.log('control', args);
        control.onChange?.(...args);

        if (typeof onChangeCustom === 'function') {
          let value: StoreValue;

          if (getValueFromEventCustom) {
            value = getValueFromEventCustom(...args);
          } else {
            value = getValueFromEvent(args, {
              valuePropName
            })
          }

          onChangeCustom?.({
            form,
            value,
            preValue: control.value
          });
        }
      }

      const childProps: React.ReactElement<any>['props'] = {
        disabled,
        status,
        ...fieldProps,
        ...(children?.props || {}),
        ...control,
        onChange
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

      if (isAutoTrim) {
        childProps.onBlur = (e: React.MouseEvent) => {
          fieldProps.onBlur?.(e);

          if (!type || type === FormItemTypeEnum.INPUT || type === FormItemTypeEnum.TEXTAREA || type === FormItemTypeEnum.EMAIL || type === FormItemTypeEnum.URL) {
            const value = (e.target as HTMLInputElement).value;

            if (value) {
              form.handleSetFieldValue?.(meta.name, value.trim(), {
                isValidateField: true
              });
            }
          }
        }
      }

      return (
        <div className={classNames(prefixCls, className, classes?.wrapper, {
          ['has-error']: hasError
        })}>
          {
            label
            &&
            <FormItemLabel
              tooltip={tooltip}
              {...labelProps}
              id={`${fieldId}_label`}
              htmlFor={fieldId}
              required={isRequired}
            >
              {label}
            </FormItemLabel>
          }
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
    }
  }

  return (
    <RcFieldForm
      name={name}
      rules={rules}
      valuePropName={valuePropName}
      getValueFromEvent={getValueFromEventCustom}
      {...restProps}
      messageVariables={{
        label,
        name: label,
        ...messageVariables
      }}
    >
      {renderChildren}
    </RcFieldForm>
  )
}

FormItem.displayName = 'FormItem';

export default withStyles<FormItemProps>(styles)(FormItem)
