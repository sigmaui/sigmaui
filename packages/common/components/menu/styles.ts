import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'list' | 'listTitle'

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {
      listStyle: 'none',

      [`&.${prefixCls}-horizontal`]: {
        display: 'flex',
      },

      [`& .${prefixCls}-item`]: {
        paddingInline: 12,
        cursor: 'pointer',

        '&[class*="-selected"]': {
          color: theme.colors?.base
        }
      },

      [`& .${prefixCls}-hidden`]: {
        display: 'none'
      },

      '& ul': {
        listStyle: 'none',
      }
    },
    list: {},
    listTitle: {}
  }
}

export type MenuTypes = ReturnType<typeof styles>
export type MenuKeys = keyof MenuTypes

export type MenuProps = IProps<MenuTypes>
