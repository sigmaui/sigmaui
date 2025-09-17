import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'required';

export const styles = ({ isSuffixMark }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme);
  const requiredStyle: StylesProperties = {};

  if (isSuffixMark) {
    requiredStyle[':after'] = {
      content: 'attr(data-required-mark)',
      display: 'inline-block',
      marginLeft: 4,
      color: 'form.requiredMark'
    } as StylesProperties
  } else {
    requiredStyle[':before'] = {
      content: 'attr(data-required-mark)',
      display: 'inline-block',
      marginRight: 4,
      color: 'form.requiredMark'
    } as StylesProperties
  }

  return {
    wrapper: {
      display: 'flex',
      fontSize: 14
    },
    required: requiredStyle
  }
}

export type FormItemLabelTypes = ReturnType<typeof styles>
export type FormItemLabelKeys = keyof FormItemLabelTypes

export type FormItemLabelProps = IProps<FormItemLabelTypes>
