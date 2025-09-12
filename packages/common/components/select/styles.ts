import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'popup' | 'prefix' | 'suffix' | 'input'

export const styles = ({
  prefixCls,
  theme = {},
  size,
  variant
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  return {
    wrapper: {
      position: 'relative',
      minWidth: 96,
      cursor: 'pointer',

      '&:hover': {
        [`& .${prefixCls}-clear`]: {
          opacity: 1
        }
      },

      [`&.${prefixCls}-single`]: {},

      [`& .${prefixCls}-selector`]: {
        position: 'relative',
        border: '1px solid',
        borderColor: theme.colors?.border,
        paddingInline: 12,
        size,
        variant
      },

      [`& .${prefixCls}-selection-wrap`]: {
        display: 'flex',
        alignItems: 'center',
        height: '100%'
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
        // display: 'flex',
        // alignItems: 'center',
        width: '100%',
        paddingRight: 12,
        lineClamp: 1,
        pointerEvents: 'none'
      },

      [`& .${prefixCls}-selection-placeholder`]: {
        color: theme.colors?.placeholder,
      },

      [`& .${prefixCls}-arrow, & .${prefixCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
        color: 'rgba(0,0,0,0.25)',
        lineHeight: 0
      },

      [`& .${prefixCls}-clear`]: {
        backgroundColor: '#fff',
        opacity: 0,
        transition: 'color .2s ease, opacity .2s ease',

        '&:hover': {
          color: 'rgba(0,0,0,0.45)'
        }
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
      zIndex: theme.zIndex?.popup?.select,
      height: 'auto',
      paddingBlock: 6,
      size,

      '&[class*="-hidden"]': {
        display: 'none'
      },

      [`& .${prefixCls}-item`]: {
        display: 'flex',
        alignItems: 'center',
        minHeight: 28,
        paddingInline: 12,
        gap: 6,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.05)'
        },

        '&[class*="-option-disabled"]': {
          opacity: 0.5,
          cursor: 'not-allowed'
        }
      },

      [`& .${prefixCls}-item-option-content`]: {
        flex: 'auto',
        lineClamp: 1
      },

      [`& .${prefixCls}-item-option-state`]: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 0,
        flex: 'none'
      },
    },
    // prefix: {},
    // suffix: {},
    // input: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>
export type SelectKeys = keyof SelectTypes
export type SelectProps = IProps<SelectTypes>
