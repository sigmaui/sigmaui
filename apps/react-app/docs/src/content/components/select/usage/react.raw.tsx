import Select from '@sigmaui-kit/select'
export default function Demo() {
  return (
    <Select
      {props.size}
      itemGroupLabel="Size"
      placeholder="Select size"
      options={{
        items: [
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
        ],
      }}
    />
  )
}
