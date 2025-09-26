import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'popup' | 'list' | 'listTitle';

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {
      listStyle: 'none',

      [`&.${prefixCls}-horizontal`]: {
        display: 'flex',
      },

      [`& .${prefixCls}-item`]: {
        display: 'inline-flex',
        alignItems: 'center',
        paddingInline: 12,
        cursor: 'pointer',

        '&[class*="-selected"]': {
          color: theme.colors?.base,
        },
      },

      [`& .${prefixCls}-hidden`]: {
        display: 'none',
      },

      '& ul': {
        listStyle: 'none',
      },

      [`&.${prefixCls}-inline`]: {
        [`& .${prefixCls}-item`]: {
          width: '100%',
        },
      },
    },
    list: {},
    listTitle: {},
    popup: {
      position: 'absolute',

      '&[class*="-hidden"]': {
        display: 'none',
      },

      '& ul': {
        listStyle: 'none',
      },
    },
  };
};

export type MenuTypes = ReturnType<typeof styles>;
export type MenuKeys = keyof MenuTypes;

export type MenuProps = IProps<MenuTypes>;
