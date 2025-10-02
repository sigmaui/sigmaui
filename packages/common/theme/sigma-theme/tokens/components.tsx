import { ReactNode } from 'react';
import { WithTranslation } from 'react-i18next';
import { FormItemTypeEnum, checkEmail } from '@sigmaui-kit/form';
import Input from '@sigmaui-kit/input';
import InputNumber from '@sigmaui-kit/input-number';
import Password from '@sigmaui-kit/password';
import Textarea from '@sigmaui-kit/textarea';
import Select from '@sigmaui-kit/select';
import Switch from '@sigmaui-kit/switch';

import iconMap from './iconMap';

const formCustomRenderItem = ({ type }: { type?: any }) => {
  let controller: ReactNode;

  switch (type) {
    case FormItemTypeEnum.PASSWORD:
      controller = <Password />;
      break;

    case FormItemTypeEnum.EMAIL:
      controller = <Input />;
      break;

    case FormItemTypeEnum.INPUT:
      controller = <Input />;
      break;

    case FormItemTypeEnum.NUMBER:
      controller = <InputNumber />;
      break;

    case FormItemTypeEnum.TEXTAREA:
      controller = <Textarea />;
      break;

    case FormItemTypeEnum.SELECT:
      controller = <Select />;
      break;

    case FormItemTypeEnum.SWITCH:
      controller = (
        <Switch
          checkedChildren="Bật"
          unCheckedChildren="Tắt"
        />
      );
      break;
  }

  return controller;
};

const formRules = (params: { t?: WithTranslation['t'] } = {}) => {
  const { t } = params;

  return {
    // email: [
    //   () => ({
    //     validator(rule: any, value: any) {
    //       if (!value || checkEmail(value)) {
    //         return Promise.resolve();
    //       }
    //
    //       return Promise.reject(t?.('form.message.notValidEmail', {
    //         defaultValue: 'The input is not valid E-mail'
    //       }));
    //     }
    //   })
    // ]
  };
};

export const components = {
  Button: {
    defaultProps: {},
    _style: {
      wrapper: {},
    },
  },
  Input: {
    defaultProps: {},
    _style: {
      count: {
        fontSize: 12,
        color: 'rgba(41, 43, 51, 0.40)',
      },
    },
  },
  Icon: {
    defaultProps: {
      iconMap,
    },
  },
  Password: {
    defaultProps: {
      action: 'pointer',
      // size: 'lg'
    },
  },
  Form: {
    defaultProps: {
      customRenderItem: formCustomRenderItem,
      formRules,
    },
    _style: {},
  },
  FormItem: {
    defaultProps: {},
    _style: {
      wrapper: {
        marginBottom: 26,
      },
    },
  },
  FormItemLabel: {
    defaultProps: {
      isSuffixMark: true,
    },
    _style: {
      wrapper: {
        marginBottom: 6,
      },
    },
  },
  FormItemControl: {
    _style: {
      meta: {
        minHeight: 26,
        marginBottom: -26,
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 12,
        fontWeight: 600,
      },
    },
  },
  FormItemError: {
    _style: {
      errorLine: {
        '& svg': {
          width: 20,
          height: 20,
        },
      },
    },
  },
  Tooltip: {
    _style: (_: any, props: any = {}) => {
      const { prefixCls } = props;

      return {
        root: {
          [`& .${prefixCls}-body`]: {
            borderRadius: 4,
            fontSize: 14,
            // whiteSpace: 'nowrap'
          },
        },
      };
    },
  },
  Switch: {
    _style: (_: any, props: any = {}) => {
      const { prefixCls } = props;

      return {
        wrapper: {
          [`& .${prefixCls}-content`]: {
            backgroundColor: 'rgba(41, 43, 51, 0.1)',
          },

          [`& .${prefixCls}-handle`]: {
            '&:before': {
              boxShadow: '0 1px 2px 0 rgba(41, 43, 51, 0.05), 0 1px 3px 0 rgba(41, 43, 51, 0.10)',
            },
          },

          [`&:not(.${prefixCls}-checked)`]: {
            [`& .${prefixCls}-content`]: {
              boxShadow: `inset 0 0 0 1px rgba(41, 43, 51, 0.2)`,
            },
          },
        },
      };
    },
  },
};
