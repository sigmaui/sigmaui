import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'header' | 'item' | 'content' | 'indicator';

export const styles = ({ prefixCls, theme = {} }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    header: {
      position: 'relative',
      display: 'flex',

      [`& .${prefixCls}-nav-list`]: {
        display: 'flex',
      },

      [`& .${prefixCls}-nav-operations-hidden`]: {
        visibility: 'hidden',
        pointerEvents: 'none',
      },
    },
    item: {
      position: 'relative',
      height: 'default',
      paddingInline: 12,
      color: '#fff',
      cursor: 'pointer',

      '&[class*="-active"]': {
        color: 'base',
      },
    },
    indicator: {
      position: 'absolute',
      height: '2px',
      backgroundColor: 'base',
      bottom: 0,
      transition: 'width 0.2s, left 0.2s, right 0.2s',
    },
    content: {
      marginTop: 12,
    },
  };
};

export type TabsTypes = ReturnType<typeof styles>;
export type TabsKeys = keyof TabsTypes;

export type TabsProps = IProps<TabsTypes>;
