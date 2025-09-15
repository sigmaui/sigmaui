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
      width: '100%',
      outline: 0,
      borderColor: 'border',
      borderStyle: 'solid',
      borderWidth: 1,
      transition: 'borderColor .2s, boxShadow .2s',
      size,
      variant,

      '&:hover': {
        borderColor: 'base'
      },

      '&:focus, &[class*="-focused"]': {
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

        '&:hover': {
          borderColor: 'error'
        },

        '&:focus': {
          boxShadow: 'error.focused',
          borderColor: 'error'
        }
      },

      [`&.${prefixCls}-affix-wrapper`]: {
        display: 'flex'
      },

      '& input': {
        background: 'transparent',
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        borderRadius: 0,
        outline: 'none',
      },

      [`& .${prefixCls}-suffix`]: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        marginLeft: 4
      }
    }
  }
}

export type InputTypes = ReturnType<typeof styles>
export type InputKeys = keyof InputTypes

export type InputProps = IProps<InputTypes>
