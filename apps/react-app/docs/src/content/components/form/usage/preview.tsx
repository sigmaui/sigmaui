import React, { useState } from 'react';
import Form, { FormItemOption, FormItemTypeEnum } from '@sigmaui-kit/form';
import LockFilledIcon from '@sigmaui-kit/icons/LockFilledIcon';
import Button from '@sigmaui-kit/button';
import type { InputTypes } from '@sigmaui-kit/input';
import ComponentPreview from '@docs/components/ComponentPreview';
import code from './code';

export const Demo: React.FC<any> = () => {
  const onFinish = (value) => {
    console.log('onFinish', value);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      initialValues={{
        email: 'donglh@gviet.vn',
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
          },
          labelProps: {
            isSuffixMark: true,
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
            prefix: <LockFilledIcon />,
          },
        },
      ]}
    >
      {({ isSubmitting }) => {
        return (
          <Button
            htmlType="submit"
            locking={isSubmitting}
            _style={{
              wrapper: {
                width: '100%',
              },
            }}
          >
            Submit
          </Button>
        );
      }}
    </Form>
  );
};
export default function UsageFormComponent() {
  const [value, setValue] = useState<number[] | undefined>(undefined);
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
