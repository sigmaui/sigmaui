import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'popup' | 'prefix' | 'suffix' | 'input'

export const styles = ({ theme = {} }: IProps<any>): Record<ClassKeys, StylesProperties> => {
  return {
    wrapper: {
      '& .sm-select-selector': {
        border: '1px solid #ddd'
      }
    },
    popup: {
      position: 'fixed'
    },
    prefix: {},
    suffix: {},
    input: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>
export type SelectKeys = keyof SelectTypes
export type SelectProps = IProps<SelectTypes>
