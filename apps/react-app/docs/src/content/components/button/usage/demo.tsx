import ComponentPreview from '@docs/components/ComponentPreview'
import Button from '@sigmaui-kit/button'
import { buttonContent } from '..'
import { ThemeVariant } from '@packages/common/types'

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Button
      variant={control.state.variant}
      locking
    >
      Demo
    </Button>
  )
}
export const UsageButtonComponent = () => {
  return (
    <ComponentPreview<{ variant: string; abc: string }>
      data={buttonContent.usage}
      items={[
        {
          prop: 'variant',
          type: 'select',
          initialValue: '',
          label: 'Variant',
          options: [
            {
              label: 'Default',
              value: '',
            },
            {
              label: 'Outline',
              value: 'outlined',
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
