import { WithTranslation } from 'react-i18next';

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
}

export const isObject = (val: any) => {
  return val !== null && typeof val === 'object' && Array.isArray(val) === false;
};

export const getValidateMessage = ({ t, prefix, key, defaultValue }: {
  t?: WithTranslation['t']
  prefix?: string,
  key: string,
  defaultValue?: string
}) => {
  let validateMessage = '';

  if (!prefix) {
    prefix = '${label}'
  }

  if (prefix) {
    validateMessage += `${prefix} `;
  }

  if (key) {
    validateMessage += (t ? `${t(key, { defaultValue })}` : (defaultValue || key));
  }

  return validateMessage
};

export const checkShouldUpdate = (keys?: string | string[], prevValues: Values = {}, currentValues: Values = {}) => {
  if (!keys) {
    return true
  }

  console.log('checkShouldUpdate', prevValues, currentValues)

  if (keys instanceof Array) {
    return keys.some(key => {
      return prevValues[key] !== currentValues[key]
    })
  }

  if (typeof keys === 'string') {
    return prevValues[keys] !== currentValues[keys]
  }

  return false
};