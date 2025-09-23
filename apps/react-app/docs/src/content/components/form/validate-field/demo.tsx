import React, { useState } from 'react';
import Form, { FormItemTypeEnum, FormItemOption } from '@sigmaui-kit/form';
import LockFilledIcon from '@sigmaui-kit/icons/LockFilledIcon';
import Button from '@sigmaui-kit/button';
import type { InputTypes, InputProps } from '@sigmaui-kit/input';
import ComponentPreview from '@docs/components/ComponentPreview';
import { formContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control);

  const onFinish = (values) => {
    console.log('onFinish', values);
  }

  return (
    <Form
      name="validate-field"
      disabled={control.state.disabled}
      onFinish={onFinish}
      initialValues={{
        email: 'donglh@gviet.vn',
        status: false
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
        } as FormItemOption<InputTypes, InputProps>,
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
          defaultValue: 'admin',
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
          onChange: ({ form }) => {
            form?.handleSetFieldValue('merchant', undefined)
          }
        },
        {
          label: 'Merchant',
          name: 'merchant',
          type: FormItemTypeEnum.SELECT,
          required: true,
          defaultValue: 'merchant1',
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
          shouldUpdateKey: ['scope'],
          autoResetValue: null,
          validateField: ({ form }) => {
            const scope = form?.getFieldValue('scope');

            if (!scope) {
              return
            }

            console.log('scope', scope)

            return {
              // type: FormItemTypeEnum.INPUT
            }
          }
        },
        {
          label: 'Description',
          name: 'description',
          type: FormItemTypeEnum.TEXTAREA,
          required: true,
          _style: {
            wrapper: {
              width: '100%!important'
            }
          }
        },
        {
          label: 'Active status',
          name: 'status',
          type: FormItemTypeEnum.SWITCH,
          required: true,
          defaultValue: true,
          _style: {
            wrapper: {
              width: '100%!important'
            }
          }
        },
      ]}
      layout={{
        col: 2,
        space: 16
      }}
    >
      {
        ({ form, isSubmitting }) => {
          return (
            <Button
              htmlType="submit"
              locking={isSubmitting}
              _style={{
                wrapper: {
                  width: '100%'
                }
              }}
              onClick={form?.handleSubmit(onFinish)}
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
