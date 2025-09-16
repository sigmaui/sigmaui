import { ReactNode } from 'react';
import { WithTranslation } from 'react-i18next';
import { FormItemTypeEnum, checkEmail } from '@sigmaui-kit/form';
import Input from '@sigmaui-kit/input';
import Password from '@sigmaui-kit/password';

import iconMap from './iconMap';

const formCustomRender = ({ type }) => {
  let controller: ReactNode;

  switch (type) {
    case FormItemTypeEnum.INPUT:
      controller = (
        <Input/>
      );
      break;

    case FormItemTypeEnum.PASSWORD:
      controller = (
        <Password/>
      );
      break;

    case FormItemTypeEnum.EMAIL:
      controller = (
        <Input/>
      )
  }

  return controller;
};

const formRules = (params: { t?: WithTranslation['t'] } = {}) => {
  const { t = (text: string) => text } = params;

  return {
    email: [
      () => ({
        validator(rule, value) {
          if (!value || checkEmail(value)) {
            return Promise.resolve();
          }

          return Promise.reject(t('form.message.notValidEmail', {
            defaultValue: 'The input is not valid E-mail'
          }));
        }
      })
    ]
  }
}

export const components = {
  Button: {
    defaultProps: {},
    _style: {
      wrapper: {},
    },
  },
  Icon: {
    defaultProps: {
      iconMap
    },
  },
  Password: {
    defaultProps: {
      // action: 'pointer'
      // size: 'lg'
    },
  },
  Form: {
    defaultProps: {
      customRender: formCustomRender,
      formRules
    },
  }
}
