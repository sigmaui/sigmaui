import type { WithTranslation } from 'react-i18next';
import type { FormInstance } from '@rc-component/form';
import type { EventArgs } from '@rc-component/form/lib/interface';

import { type FormItemOption, FormItemTypeEnum } from './FormItem/types';

export type Values = Record<string, any>;

export const checkNumber = (str: string) => {
  const re = /^[0-9]*$/;
  return re.test(str);
};

export const checkEmail = (str: string) => {
  const regEx = /^[a-zA-Z0-9._%+-]{4,64}@([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/;
  return regEx.test(str);
};

export const checkUrl = (str: string) => {
  const re = /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/;
  return re.test(str);
};

export const checkOnlySpace = (str: string) => {
  return str.trim().length === 0;
};

export const isObject = (val: any) => {
  return val !== null && typeof val === 'object' && Array.isArray(val) === false;
};

export const getValidateMessage = ({
  t,
  prefix,
  key,
  defaultValue,
}: {
  t?: WithTranslation['t'];
  prefix?: string;
  key: string;
  defaultValue?: string;
}) => {
  let validateMessage = '';

  if (!prefix) {
    prefix = '${label}';
  }

  if (prefix) {
    validateMessage += `${prefix} `;
  }

  if (key) {
    validateMessage += t ? `${t(key, { defaultValue })}` : defaultValue || key;
  }

  return validateMessage;
};

export const checkShouldUpdate = (
  keys?: string | string[],
  prevValues: Values = {},
  currentValues: Values = {},
  params = {},
) => {
  const {
    form,
    isAutoResetValue,
    name,
    autoResetValue,
  }: {
    info?: any;
    form?: FormInstance;
    name?: FormItemOption['name'];
    isAutoResetValue?: boolean;
    autoResetValue?: FormItemOption['autoResetValue'];
  } = params;

  if (!keys) {
    return true;
  }

  console.log('checkShouldUpdate', prevValues, currentValues);

  if (keys instanceof Array) {
    return keys.some((key) => {
      if (prevValues[key] !== currentValues[key]) {
        if (isAutoResetValue) {
          form?.setFieldValue(name, autoResetValue);
        }

        return true;
      }

      return false;
    });
  }

  if (typeof keys === 'string') {
    if (prevValues[keys] !== currentValues[keys]) {
      if (isAutoResetValue) {
        form?.setFieldValue(name, autoResetValue);
      }

      return true;
    }

    return false;
  }

  return false;
};

export const getValueFromEvent = (args: EventArgs, params = {}) => {
  const { valuePropName, type }: { valuePropName?: string; type?: string } = params;

  const event = args[0];

  if (event && event.target && typeof event.target === 'object') {
    if (valuePropName && valuePropName in event.target) {
      return (event.target as HTMLInputElement)[valuePropName];
    }

    if (type) {
      if (type === FormItemTypeEnum.CHECKBOX) {
        return (event.target as HTMLInputElement).checked;
      }

      return (event.target as HTMLInputElement).value;
    }
  }

  return event;
};
