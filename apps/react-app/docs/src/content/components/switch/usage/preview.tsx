import React from 'react'
import ComponentPreview from '@docs/components/ComponentPreview'
import Switch from '@sigmaui-kit/switch'
import code from './code'

export const Demo: React.FC<any> = ({ control }) => {
  return (
    <Switch
      checkedChildren="Bật"
      unCheckedChildren="Tắt"
    />
  )
}
export default function Usage() {
  return (
    <>
      <ComponentPreview data={code}>
        <Demo />
      </ComponentPreview>
    </>
  )
}
