import ComponentPreview from '@docs/components/ComponentPreview'
import Button from '@sigmaui-kit/button'
import { buttonContent } from '../..'
import { ThemeVariant } from '@packages/common/types'

export const Demo: React.FC<any> = ({ control }) => {
  return <Button variant={control.state.variant}>Demo</Button>
}
export const ButonComponentPreview = () => {
  return (
    <ComponentPreview<{ variant: string; abc: string }>
      data={buttonContent.usage}
      items={[
        {
          prop: 'abc',
          type: 'demo',
          initialValue: 'default',
          label: 'ABC',
          options: [
            { label: 'Default', value: 'default' },
            { label: '123', value: '123' },
          ],
        },
        {
          prop: 'variant',
          type: 'demo',
          initialValue: 'default',
          label: 'Variant',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Outline',
              value: 'outline',
            },
            {
              label: 'Filled',
              value: 'filled',
            },
            {
              label: 'Text',
              value: 'text',
            },
            {
              label: 'Link',
              value: 'link',
            },
            {
              label: 'Solid',
              value: 'solid',
            },
          ],
        },
      ]}
    >
      {({ control }) => <Demo control={control} />}
    </ComponentPreview>
  )
}
