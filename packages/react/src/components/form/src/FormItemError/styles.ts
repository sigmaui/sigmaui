import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'errorLine';

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      color: 'error'
    },
    errorLine: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,

      '& svg': {
        width: 16,
        height: 16
      }
    }
  }
}

export type FormItemErrorTypes = ReturnType<typeof styles>
export type FormItemErrorKeys = keyof FormItemErrorTypes

export type FormItemErrorProps = IProps<FormItemErrorTypes>
