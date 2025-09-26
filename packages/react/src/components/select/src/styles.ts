import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'popup' | 'prefix' | 'suffix' | 'input';

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

      [`&.${prefixCls}-single`]: {
        [`&.${prefixCls}-open`]: {
          [`& .${prefixCls}-selection-item`]: {
            color: 'placeholder'
          }
        }
      },

      [`& .${prefixCls}-selector`]: {
        position: 'relative',
        border: '1px solid',
        borderColor: 'border',
        paddingInline: 12,
        size,
        variant
      },

      [`& .${prefixCls}-selection-wrap`]: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        minWidth: 0
      },

      [`& .${prefixCls}-selection-overflow`]: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '100%'
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
          cursor: 'pointer',
          fontFamily: 'inherit',

          '&::-webkit-search-cancel-button': {
            display: 'none',
            appearance: 'none'
          }
        }
      },

      [`& .${prefixCls}-selection-overflow-item`]: {
        display: 'inline-flex',
        maxWidth: '100%'
      },

      [`& .${prefixCls}-selection-placeholder, & .${prefixCls}-selection-item`]: {
        // display: 'flex',
        // alignItems: 'center',
        width: '100%',
        paddingRight: 12,
        lineClamp: 1,
        userSelect: 'none'
      },

      [`& .${prefixCls}-selection-item`]: {
        transition: 'all .3s, visibility 0s'
      },

      [`& .${prefixCls}-selection-placeholder`]: {
        color: 'placeholder',
        pointerEvents: 'none'
      },

      [`& .${prefixCls}-arrow, & .${prefixCls}-clear`]: {
        position: 'absolute',
        top: '50%',
        right: 10,
        transform: 'translateY(-50%)',
        color: 'rgba(0,0,0,0.25)',
        lineHeight: 0,

        '& svg': {
          width: 14,
          height: 14
        }
      },

      [`& .${prefixCls}-selection-item-remove`]: {
        display: 'inline-flex',
        alignItems: 'center',
        height: '100%',
        marginLeft: 2,
        cursor: 'pointer',
        lineHeight: 0,
        opacity: 0.5,

        '& svg': {
          width: 12,
          height: 12
        },

        '&:hover': {
          opacity: 0.8
        }
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
          boxShadow: 'focused',
          borderColor: 'base'
        },
      },

      [`&.${prefixCls}-show-search`]: {
        [`& .${prefixCls}-selector`]: {
          cursor: 'text'
        }
      },

      [`&.${prefixCls}-multiple`]: {
        [`& .${prefixCls}-selector`]: {
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          minHeight: 32,
          paddingRight: 26,
          paddingLeft: 2
        },

        [`& .${prefixCls}-selection-placeholder`]: {
          position: 'absolute',
          width: 'auto',
          top: '50%',
          left: 5,
          right: 26,
          transform: 'translateY(-50%)',
          transition: 'all 0.3s'
        },

        [`& .${prefixCls}-selection-search`]: {
          position: 'relative',
          marginLeft: 4,

          '& input': {
            minWidth: 4,
            outline: 'none',
            appearance: 'none'
          }
        },

        [`& .${prefixCls}-selection-search-mirror`]: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 'auto',
          zIndex: 999,
          visibility: 'hidden'
        },

        [`& .${prefixCls}-selection-item`]: {
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.06)',
          height: 24,
          lineHeight: 24,
          borderRadius: 4,
          marginBlock: 2,
          marginRight: 4,
          paddingLeft: 6,
          paddingRight: 4,
          cursor: 'default'
        },

        [`& .${prefixCls}-selection-overflow-item`]: {
          [`&+.${prefixCls}-selection-overflow-item`]: {
            [`& .${prefixCls}-selection-search`]: {
              marginLeft: 0
            }
          },
        },

        [`& .${prefixCls}-selection-overflow-item-suffix`]: {
          marginBlock: 4
        },

        [`& .${prefixCls}-selection-item-content`]: {
          overflow: 'hidden',
          lineClamp: 1
        }
      }
    },
    popup: {
      position: 'absolute',
      backgroundColor: 'popup.background',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'popup.border',
      boxShadow: 'popup',
      zIndex: 'popup.select',
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

      [`& .${prefixCls}-item-option-active`]: {
        backgroundColor: 'rgba(0,0,0,0.05)'
      },

      [`& .${prefixCls}-item-option-content`]: {
        flex: 'auto',
        lineClamp: 1
      },

      [`& .${prefixCls}-item-option-state`]: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: 0,
        flex: 'none',

        '& svg': {
          width: 14,
          height: 14
        }
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
