import React from 'react'
import ComponentPreview from '@docs/components/ComponentPreview'
import Textarea from '@sigmaui-kit/textarea'
import code from './code'

export const Demo: React.FC<any> = () => {
  return <Textarea placeholder="Textarea" />
}
export default function UsageTextareaComponent() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
