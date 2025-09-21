import { ReactNode } from 'react';
import { WithTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FormItemTypeEnum } from '@sigmaui-kit/form';
import { AlertErrorIcon } from '@sigmaui-kit/icons';
import Input from '@sigmaui-kit/input';
import Password from '@sigmaui-kit/password';
import Select from '@sigmaui-kit/select';

import iconMap from './iconMap';

const formCustomRenderItem = ({ type }) => {
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
      );
      break;

    case FormItemTypeEnum.URL:
      controller = (
        <Input/>
      );
      break;

    case FormItemTypeEnum.SELECT:
      controller = (
        <Select/>
      );
  }

  return controller;
};

const formRules = (params: { t?: WithTranslation['t'] } = {}) => {
  const { t = (text: string) => text } = params;

  return {
    // email: [
    //   () => ({
    //     validator(rule, value) {
    //       if (!value || checkEmail(value)) {
    //         return Promise.resolve();
    //       }
    //
    //       return Promise.reject(t('form.message.notValidEmail', {
    //         defaultValue: '${label} the input is not valid E-mail'
    //       }));
    //     }
    //   })
    // ]
  }
}

export const components = {
  Button: {
    defaultProps: {
      asLink: Link
    },
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
      customRenderItem: formCustomRenderItem,
      formRules,
      validateIcons: {
        error: <AlertErrorIcon/>
      }
    },
  }
}
