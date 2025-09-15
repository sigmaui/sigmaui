import Select from '@sigmaui-kit/select'

export default function Demo() {
  return (
    <Select
      placeholder="Select size"
      options={[
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Middle',
          value: 'middle',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ]}
    />
  )
}
