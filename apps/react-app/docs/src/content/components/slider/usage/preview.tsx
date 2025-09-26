import ComponentPreview from '@docs/components/ComponentPreview'
import Slider from '@sigmaui-kit/slider'
import code from './code'
export const Demo: React.FC<any> = () => {
  return <Slider defaultValue={[0]} />
}
export default function UsageSliderComponent() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
