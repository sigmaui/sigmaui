import React, { useState } from 'react';
import Form, { FormItemTypeEnum, FormItemOption } from '@sigmaui-kit/form';
import LockFilledIcon from '@sigmaui-kit/icons/LockFilledIcon';
import Button from '@sigmaui-kit/button';
import type { InputTypes } from '@sigmaui-kit/input';
import ComponentPreview from '@docs/components/ComponentPreview';
import { formContent } from '..';

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control);

  const onFinish = (value) => {
    console.log('onFinish', value);
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
            placeholder: 'Enter email'
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
            )
          }
        }
      ]}
    >
      {
        ({ isSubmitting }) => {
          return (
            <Button
              htmlType="submit"
              locking={isSubmitting}
              _style={{
                wrapper: {
                  width: '100%'
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
export const UsageFormComponent = () => {
  const [value, setValue] = useState<number[] | undefined>(undefined)
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={formContent.usage}
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
