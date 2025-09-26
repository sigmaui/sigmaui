import ComponentPreview from '@docs/components/ComponentPreview'
import Button from '@sigmaui-kit/button'
import { ThemeVariant } from '@packages/common/types'
import code from './code'
export const Demo: React.FC<any> = () => {
  return <Button locking>Demo</Button>
}
export default function Usage() {
  return (
    <ComponentPreview data={code}>
      <Demo />
    </ComponentPreview>
  )
}
