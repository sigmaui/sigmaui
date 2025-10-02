import React, { useState } from 'react';
import Form, { FormItemOption, FormItemTypeEnum, useForm } from '@sigmaui-kit/form';
import LockFilledIcon from '@sigmaui-kit/icons/LockFilledIcon';
import Button from '@sigmaui-kit/button';
import type { InputProps, InputTypes } from '@sigmaui-kit/input';
import ComponentPreview from '@docs/components/ComponentPreview';
import code from './code';

export const Demo: React.FC<any> = ({ control }) => {
  console.log('control', control);

  const [form] = useForm({
    name: 'validate-field',
  });

  const { useStoreSelector } = form.storeMethods;

  const isDirty = useStoreSelector((state) => state.isDirty);
  // const isSubmitting = useStoreSelector((state) => state.isSubmitting);

  console.log('isDirty', isDirty);

  const onFinish = (values) => {
    console.log('values', values);

    const changedValues = form.getChangedValues();
    console.log('changedValues', changedValues);
  };

  return (
    <Form
      form={form}
      name="validate-field"
      onFinish={onFinish}
      initialValues={{
        email: 'donglh@gviet.vn',
        status: false,
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
            isSuffixMark: true,
          },
          // validateMessages: {
          //   required: 'Please do not leave blank',
          // }
        } as FormItemOption<InputTypes, InputProps>,
        {
          label: 'Password',
          name: 'password',
          type: FormItemTypeEnum.PASSWORD,
          required: true,
          tooltip:
            'Password must be 6-20 characters and must contain at least one number, lowercase letter, uppercase letter and special character (!,@,#,$,&,*)',
          fieldProps: {
            placeholder: 'Enter password',
            action: 'pointer',
            prefix: <LockFilledIcon />,
            // suffix: '123332'
          },
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
                value: 'admin',
              },
              {
                label: 'Merchant',
                value: 'merchant',
              },
            ],
          },
          onChange: ({ form }) => {
            form?.handleSetFieldValue('merchant', undefined);
          },
        },
        {
          label: 'Merchant',
          name: 'merchant',
          type: FormItemTypeEnum.SELECT,
          required: true,
          // defaultValue: 'merchant1',
          fieldProps: {
            placeholder: 'Select merchant',
            options: [
              {
                label: 'Merchant 1',
                value: 'merchant1',
              },
              {
                label: 'Merchant 2',
                value: 'merchant2',
              },
            ],
          },
          shouldUpdateKey: ['scope'],
          autoResetValue: null,
          validateField: ({ form }) => {
            const scope = form?.getFieldValue('scope');
            const description = form?.getFieldValue('extra.description');

            console.log('description', description);

            if (!scope) {
              return;
            }

            console.log('scope', scope);

            return {
              // type: FormItemTypeEnum.INPUT
            };
          },
        },
        {
          label: 'Description',
          name: 'extra.description',
          type: FormItemTypeEnum.TEXTAREA,
          required: true,
          _style: {
            wrapper: {
              width: '100%!important',
            },
          },
        },
        {
          label: 'Active status',
          name: 'status',
          type: FormItemTypeEnum.SWITCH,
          required: true,
          defaultValue: true,
          _style: {
            wrapper: {
              width: '100%!important',
            },
          },
        },
      ]}
      layout={{
        col: 2,
        space: 16,
      }}
    >
      {({ form, isSubmitting, isDirty }) => {
        // console.log('isDirty', isDirty);

        return (
          <Button
            htmlType="submit"
            locking={isSubmitting}
            _style={{
              wrapper: {
                width: '100%',
              },
            }}
            onClick={form?.handleSubmit(onFinish)}
            // onClick={(event) => {
            //   event.preventDefault();
            //   form?.reset();
            // }}
          >
            Submit
          </Button>
        );
      }}
    </Form>
  );
};
export default function ValidateFieldComponent() {
  const [value, setValue] = useState<number[] | undefined>(undefined);
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  );
}
