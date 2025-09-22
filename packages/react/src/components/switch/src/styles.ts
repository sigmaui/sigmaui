import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'content';

export const styles = ({
  prefixCls,
  theme = {},
  size,
  variant
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      cursor: 'pointer',

      [`& .${prefixCls}-content`]: {
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.25)',
        borderRadius: 100,
        size,
        variant,
        userSelect: 'none',
      },

      [`& .${prefixCls}-handle`]: {
        position: 'absolute',
        top: 0,
        left: 0,
        size: `handle.${size}`,
        height: '100%',
        transition: 'all .2s ease-in-out',

        '&:before': {
          content: '""',
          position: 'absolute',
          top: 2,
          left: 2,
          width: `calc(100% - 4px)`,
          height: `calc(100% - 4px)`,
          backgroundColor: '#fff',
          borderRadius: 14,
          transition: 'all .2s ease-in-out'
        }
      },

      [`&.${prefixCls}-checked`]: {
        [`& .${prefixCls}-content`]: {
          backgroundColor: 'base',
        },

        [`& .${prefixCls}-handle`]: {
          left: '100%',
          transform: 'translateX(-100%)'
        },

        [`& .${prefixCls}-inner-checked`]: {
          display: 'inline-block'
        },

        [`& .${prefixCls}-inner-unchecked`]: {
          display: 'none'
        }
      },

      [`& .${prefixCls}-inner`]: {
        paddingLeft: 12,
        pointerEvents: 'none'
      },

      [`& .${prefixCls}-inner-checked`]: {
        display: 'none'
      },

      [`& .${prefixCls}-inner-unchecked`]: {
        display: 'inline-block'
      },

      '&:active': {}
    },
    content: {}
  }
}

export type SwitchTypes = ReturnType<typeof styles>
export type SwitchKeys = keyof SwitchTypes

export type SwitchProps = IProps<SwitchTypes>
