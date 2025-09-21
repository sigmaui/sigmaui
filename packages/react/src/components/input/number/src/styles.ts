import { IProps, StylesProperties } from './types';

export type ClassKeys =
  | 'wrapper'
  | 'affixWrapper'
  | 'prefix'
  | 'suffix'
  | 'actions'
  | 'input';

export const styles = ({ prefixCls, size, variant }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {
      position: 'relative',
      width: '100%',
      outline: 0,
      borderColor: 'border',
      borderStyle: 'solid',
      borderWidth: 1,
      transition: 'borderColor .2s, boxShadow .2s',
      color: 'input.text',
      fontFamily: 'inherit',
      size,
      variant,

      '&:hover': {
        borderColor: 'base',

        [`& .${prefixCls}-handler-wrap`]: {
          width: 22,
          opacity: 1
        }
      },

      '&:focus, &[class*="-focused"]': {
        boxShadow: 'focused',
        borderColor: 'base'
      },

      '&::placeholder': {
        color: 'input.placeholder'
      },

      '&[disabled]': {
        cursor: 'not-allowed',
      },

      '& input': {
        width: '100%',
        height: '100%',
        border: 0,
        padding: 0,
        fontFamily: 'inherit',

        '&:focus': {
          outline: 'none'
        },

        '&::placeholder': {
          color: 'input.placeholder'
        }
      },

      [`& .${prefixCls}-input-wrap`]: {
        width: '100%',
        height: '100%'
      }
    },
    actions: {
      position: 'absolute',
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      width: 0,
      height: '100%',
      opacity: 0,
      overflow: 'hidden',
      transition: 'all .2s',

      [`& .${prefixCls}-handler`]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        color: 'icon.default',
        borderLeft: `1px solid #d9d9d9`,
        cursor: 'pointer',
        transition: 'all .2s linear',

        '& svg': {
          width: 10,
          height: 10,
          transition: 'all .2s linear'
        },

        '&:hover': {
          height: '60%',
          color: 'base'
        }
      },

      [`& .${prefixCls}-handler-down`]: {
        borderTop: `1px solid #d9d9d9`,
      }
    }
  }
}

export type InputNumberTypes = ReturnType<typeof styles>
export type InputNumberKeys = keyof InputNumberTypes

export type InputNumberProps = IProps<InputNumberTypes>
