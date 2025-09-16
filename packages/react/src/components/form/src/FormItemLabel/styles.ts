import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'required';

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      fontSize: 14
    },
    required: {
      ':before': {
        content: '"*"',
        display: 'inline-block',
        marginRight: 4,
        color: 'form.requiredMark'
      }
    }
  }
}

export type FormItemLabelTypes = ReturnType<typeof styles>
export type FormItemLabelKeys = keyof FormItemLabelTypes

export type FormItemLabelProps = IProps<FormItemLabelTypes>
