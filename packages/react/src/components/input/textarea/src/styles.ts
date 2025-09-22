import { IProps, StylesProperties } from './types';

export type ClassKeys =
  | 'wrapper'
  | 'affixWrapper'
  | 'prefix'
  | 'suffix'
  | 'groupWrapper'
  | 'variant'
  | 'textarea'
  | 'count';

export const styles = ({ prefixCls, size, variant }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {
      '&._error': {
        [`&.${prefixCls}, & .${prefixCls}`]: {
          borderColor: 'error',

          '&:hover': {
            borderColor: 'error'
          },

          '&:focus, &[class*="-focused"]': {
            boxShadow: 'error.focused',
            borderColor: 'error'
          },

          [`& .${prefixCls}-prefix`]: {
            color: 'error'
          },
        }
      },

      [`&.${prefixCls}, & .${prefixCls}`]: {
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
          borderColor: 'base'
        },

        '&:focus': {
          boxShadow: 'focused',
          borderColor: 'base'
        },

        '&::placeholder': {
          color: 'input.placeholder'
        },

        '&[disabled]': {
          cursor: 'not-allowed'
        }
      }
    },
    affixWrapper: {
      position: 'relative',
      width: '100%',

      '&[class*="-allow-clear"]': {
        '& textarea': {
          paddingRight: 24
        }
      },
    },
    suffix: {
      display: 'block',
      textAlign: 'right',

      [`& .${prefixCls}-clear-icon`]: {
        position: 'absolute',
        backgroundColor: 'icon',
        top: 6,
        right: 6,
        borderRadius: '50%',
        border: 'none',
        outline: 'none',
        margin: 0,
        padding: 2,
        lineHeight: 0,
        cursor: 'pointer',

        '&[class*="-hidden"]': {
          visibility: 'hidden'
        },

        '& svg': {
          width: 10,
          height: 10
        }
      }
    },
    count: {
      whiteSpace: 'nowrap',
      color: 'description',
      fontSize: 14
    }
  }
}

export type TextareaTypes = ReturnType<typeof styles>
export type TextareaKeys = keyof TextareaTypes

export type TextareaProps = IProps<TextareaTypes>
