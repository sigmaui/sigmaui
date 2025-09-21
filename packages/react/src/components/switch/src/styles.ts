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
      position: 'relative',
      backgroundColor: 'rgba(0,0,0,0.25)',
      border: 0,
      borderRadius: 100,
      minWidth: 44,
      size,
      variant,
      cursor: 'pointer',
      userSelect: 'none',

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
        backgroundColor: 'base',

        [`& .${prefixCls}-handle`]: {
          left: `calc(100% - 28px)`
        }
      },

      '&:active': {}
    }
  }
}

export type SwitchTypes = ReturnType<typeof styles>
export type SwitchKeys = keyof SwitchTypes

export type SwitchProps = IProps<SwitchTypes>
