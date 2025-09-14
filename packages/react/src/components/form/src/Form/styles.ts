import type { IProps, StylesProperties } from './types.ts'

export type ClassKeys = 'wrapper' | 'popup' | 'list' | 'listTitle'

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {}
  }
}

export type FormTypes = ReturnType<typeof styles>
export type FormKeys = keyof FormTypes

export type FormProps = IProps<FormTypes>
