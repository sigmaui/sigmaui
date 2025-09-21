import React, { useState } from 'react';
import Form, { FormItemTypeEnum, FormItemOption } from '@sigmaui-kit/form';
import LockFilledIcon from '@sigmaui-kit/icons/LockFilledIcon';
import Button from '@sigmaui-kit/button';
import type { InputTypes } from '@sigmaui-kit/input';
import ComponentPreview from '@docs/components/ComponentPreview';
import { formContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control);

  const onFinish = (values) => {
    console.log('onFinish', values);
  }

  return (
    <Form
      name="basic"
      disabled={control.state.disabled}
      onFinish={onFinish}
      initialValues={{
        email: 'donglh@gviet.vn'
      }}
      items={[
        {
          label: 'Email',
          name: 'email',
          type: FormItemTypeEnum.EMAIL,
          required: true,
          // note: 'Email',
          fieldProps: {
            placeholder: 'Enter email',
            // suffix: '123332'
          },
          labelProps: {
            isSuffixMark: true
          },
          tooltip: '123',
          // validateMessages: {
          //   required: 'Please do not leave blank',
          // }
        } as FormItemOption<InputTypes>,
        {
          label: 'Password',
          name: 'password',
          type: FormItemTypeEnum.PASSWORD,
          required: true,
          fieldProps: {
            placeholder: 'Enter password',
            action: 'pointer',
            prefix: (
              <LockFilledIcon/>
            ),
            // suffix: '123332'
          }
        },
        {
          label: 'Scope',
          name: 'scope',
          type: FormItemTypeEnum.SELECT,
          required: true,
          fieldProps: {
            placeholder: 'Select scope',
            allowClear: true,
            options: [
              {
                label: 'Admin',
                value: 'admin'
              },
              {
                label: 'Merchant',
                value: 'merchant'
              }
            ]
          },
          shouldUpdateKey: 'email',
          validateField: () => {
            console.log('validateField')
            return {}
          }
        },
        {
          label: 'Merchant',
          name: 'merchant',
          type: FormItemTypeEnum.SELECT,
          required: true,
          fieldProps: {
            placeholder: 'Select merchant',
            options: [
              {
                label: 'Merchant 1',
                value: 'merchant1'
              },
              {
                label: 'Merchant 2',
                value: 'merchant2'
              }
            ]
          },
          shouldUpdateKey: 'scope',
          validateField: ({ form }) => {
            const scope = form?.getFieldValue('scope');

            if (!scope) {
              return
            }

            console.log('scope', scope)

            return {
              type: FormItemTypeEnum.INPUT
            }
          }
        },
      ]}
      _style={(theme, { prefixCls }) => {
        console.log('prefixCls', prefixCls)

        return {
          wrapper: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            marginLeft: -8,
            marginRight: -8,

            [`& .${prefixCls}-item`]: {
              width: '50%',
              paddingInline: 8
            }
          }
        }
      }}
    >
      {
        ({ isSubmitting }) => {
          return (
            <Button
              htmlType="submit"
              locking={isSubmitting}
              _style={{
                wrapper: {
                  width: '100%',
                  marginInline: 8
                }
              }}
            >
              Submit
            </Button>
          )
        }
      }
    </Form>
  )
}
export const ValidateFieldComponent = () => {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={formContent.validateField}
        items={[
          {
            initialValue: 'small',
            prop: 'size',
            type: 'slider',
            defaultValue: [0],
            mappingData: {
              0: 'sm',
              50: 'md',
              100: 'lg',
            },
            label: 'Size',
            step: 50,
            marks: {
              items: [
                {
                  value: 0,
                },
                {
                  value: 50,
                },
                {
                  value: 100,
                },
              ],
            },
          },
        ]}
      >
        {({ control }) => <Demo control={control}/>}
      </ComponentPreview>
    </>
  )
}
