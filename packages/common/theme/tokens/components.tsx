import { ReactNode } from 'react';
import { FormItemTypeEnum, checkEmail } from '@sigmaui-kit/form';
import Input from '@sigmaui-kit/input';
import Password from '@sigmaui-kit/password';

import iconMap from './iconMap';

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
      customRender: ({ type }) => {
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
      },
      formRules: {
        email: [
          () => ({
            validator(rule, value) {
              if (!value || checkEmail(value)) {
                return Promise.resolve();
              }

              return Promise.reject('The input is not valid E-mail');
            }
          })
        ]
      }
    },
  }
}
