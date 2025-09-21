import Form, { FormItemTypeEnum } from '@sigmaui-kit/form'

export default function Demo() {
  return (
    <Form
      items={[
        {
          label: 'Email',
          name: 'email',
          type: FormItemTypeEnum.EMAIL,
          required: true,
          // note: 'Email',
          fieldProps: {
            placeholder: 'Enter email'
          }
        },
        {
          label: 'Password',
          name: 'password',
          type: FormItemTypeEnum.PASSWORD,
          required: true,
          fieldProps: {
            placeholder: 'Enter password'
          }
        }
      ]}
    />
  )
}
