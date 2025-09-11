import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'popup' | 'prefix' | 'suffix' | 'input'

export const styles = ({
  prefixCls,
  theme = {},
  size,
  variant
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  console.log('prefixCls', prefixCls)

  return {
    wrapper: {
      cursor: 'pointer',

      [`&.${prefixCls}-single`]: {},

      [`& .${prefixCls}-selector`]: {
        position: 'relative',
        border: '1px solid',
        borderColor: theme.colors?.border,
        paddingInline: 12,
        size,
        variant
      },

      [`& .${prefixCls}-selection-search`]: {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%',

        '& input': {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          border: 0,
          cursor: 'pointer'
        }
      },

      [`& .${prefixCls}-selection-placeholder, & .${prefixCls}-selection-item`]: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      },

      [`& .${prefixCls}-selection-placeholder`]: {
        color: theme.colors?.placeholder,
      },

      '&[class*="-focused"]': {
        [`& .${prefixCls}-selector`]: {
          boxShadow: theme.shadows?.focused,
          borderColor: theme.colors?.base
        },
      }
    },
    popup: {
      position: 'absolute',
      backgroundColor: theme.colors?.popup,
      border: '1px solid',
      borderColor: theme.colors?.border,
      boxShadow: theme.shadows?.popup,
      height: 'auto',
      size,

      '&[class*="-hidden"]': {
        display: 'none'
      }
    },
    // prefix: {},
    // suffix: {},
    // input: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>
export type SelectKeys = keyof SelectTypes
export type SelectProps = IProps<SelectTypes>
