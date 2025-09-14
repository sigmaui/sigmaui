import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'popup' | 'list' | 'listTitle'

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      marginBottom: 24,

      // '&:not(:last-child)': {
      //   marginBottom: 24
      // }
    }
  }
}

export type FormItemTypes = ReturnType<typeof styles>
export type FormItemKeys = keyof FormItemTypes

export type FormItemProps = IProps<FormItemTypes>
