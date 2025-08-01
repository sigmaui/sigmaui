import ComponentPreview from '@docs/components/ComponentPreview'
import { selectContent } from '..'
import Select from '@sigmaui-kit/select'
export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Select
      size={control.state.size}
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
    ></Select>
  )
}
export const UsageSelectComponent = () => {
  return (
    <ComponentPreview<{ size: string }>
      data={selectContent.usage}
      items={[
        {
          prop: 'size',
          type: 'select',
          initialValue: 'small',
          label: 'Size',
          options: [
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
        },
      ]}
    >
      {({ control }) => <Demo control={control} />}
    </ComponentPreview>
  )
}
