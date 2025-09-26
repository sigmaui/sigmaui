import React from 'react'
import ComponentPreview from '@docs/components/ComponentPreview'
import Password from '@sigmaui-kit/password'
import code from './code'

export const Demo: React.FC<any> = () => {
  return <Password placeholder="Password" />
}
export default function UsagePasswordComponent() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
