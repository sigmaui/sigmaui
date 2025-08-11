import ComponentPreview from '@docs/components/ComponentPreview'
import { sliderContent } from '..'
import Slider from '@sigmaui-kit/slider'
export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Slider
      size={control.state.size}
      defaultValue={[0]}
    />
  )
}
export const UsageSliderComponent = () => {
  return (
    <>
      <ComponentPreview<{ size: string }>
        data={sliderContent.usage}
        items={[
          {
            initialValue: 'small',
            prop: 'size',
            type: 'slider',
            defaultValue: [0],
            mappingData: {
              0: 'small',
              50: 'default',
              100: 'large',
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
        {({ control }) => <Demo control={control} />}
      </ComponentPreview>
    </>
  )
}
