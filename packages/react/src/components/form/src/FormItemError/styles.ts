import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'errorLine'

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      color: 'error'
    }
  }
}

export type FormItemErrorTypes = ReturnType<typeof styles>
export type FormItemErrorKeys = keyof FormItemErrorTypes

export type FormItemErrorProps = IProps<FormItemErrorTypes>
