import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'content' | 'meta' | 'note'

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {},
    meta: {
      fontSize: 14,
      minHeight: 24,
      marginBottom: -24
    },
    note: {
      color: 'form.note'
    }
  }
}

export type FormItemControlTypes = ReturnType<typeof styles>
export type FormItemControlKeys = keyof FormItemControlTypes

export type FormItemControlProps = IProps<FormItemControlTypes>
