import { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper'

export const styles = ({
  prefixCls,
  theme = {},
  size,
  variant
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {
      outline: 0,
      borderColor: 'border',
      borderStyle: 'solid',
      borderWidth: 1,
      transition: 'all .2s',
      size,
      variant,

      '&:hover': {
        borderColor: 'base'
      },

      '&:focus': {
        boxShadow: 'focused',
        borderColor: 'base'
      },

      '&::placeholder': {
        color: 'rgba(0,0,0,0.25)'
      },

      '&[disabled]': {
        cursor: 'not-allowed',
      },

      '&._error': {
        borderColor: 'error',

        '&:focus': {
          boxShadow: 'focused',
          borderColor: 'error'
        }
      }
    }
  }
}

export type InputTypes = ReturnType<typeof styles>
export type InputKeys = keyof InputTypes

export type InputProps = IProps<InputTypes>
