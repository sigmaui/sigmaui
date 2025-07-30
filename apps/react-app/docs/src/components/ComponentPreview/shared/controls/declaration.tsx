import { Fragment, useState } from 'react'
import { ReturnTypeUseControl } from '../..'
import { DemoControl } from './demo'
export type ControlType = 'select' | 'slider' | 'switch' | 'demo'

export type ControlCommonType<T> = {
  label: string
  prop: keyof T
  initialValue: any
}
export type SelectControlType = {
  type: 'select'
  items: {
    label: string
    value: string
  }[]
}
export type SliderControlType = {
  type: 'slider'
  min: number
  max: number
  step: number
}
export type SwitchControlType = {
  type: 'switch'
}
export type DemoControlType = {
  type: 'demo'
  options: {
    label: string
    value: string
  }[]
}

export type ControlComponentType<T> = (SelectControlType | SliderControlType | SwitchControlType | DemoControlType) &
  ControlCommonType<T>

export const useControl = <T,>(items: ControlComponentType<T>[]) => {
  const [state, setState] = useState<T>(
    items.reduce((acc, item) => {
      acc[item.prop] = item.initialValue
      return acc
    }, {} as any),
  )
  return {
    state,
    setState,
  }
}
export const Control = <T extends Record<string, any>>({
  control,
  children,
  items,
}: {
  control: ReturnTypeUseControl<T>
  children: React.ReactNode
  items: ControlComponentType<T>[]
}) => {
  return (
    <div>
      <div>
        {items?.map((item, idx) => {
          switch (item.type) {
            case 'demo':
              return (
                <DemoControl
                  key={idx}
                  {...item}
                  onChange={(value) => {
                    control.setState((pre) => ({
                      ...pre,
                      [item.prop]: value,
                    }))
                  }}
                />
              )
            default:
              return <Fragment key={idx} />
          }
        })}
        {children}
      </div>
    </div>
  )
}
