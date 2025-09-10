import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'header' | 'item' | 'content' | 'indicator'

export const styles = ({ theme = {} }: IProps<any>): Record<ClassKeys, StylesProperties> => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    header: {
      position: 'relative',
      display: 'flex',

      '& .sm-tabs-nav-list': {
        display: 'flex'
      },

      '& .sm-tabs-nav-operations-hidden': {
        visibility: 'hidden',
        pointerEvents: 'none'
      }
    },
    item: {
      position: 'relative',
      height: 28,
      paddingInline: 12,
      color: '#fff',
      cursor: 'pointer',

      '&.sm-tabs-tab-active': {
        color: theme.colors?.base
      }
    },
    list: {
      position: 'relative',
      display: 'flex',
      gap: 12,
    },
    trigger: {
      paddingBottom: 12,
      paddingInline: 12,
      border: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    indicator: {
      position: 'absolute',
      height: '2px',
      backgroundColor: theme.colors?.base,
      bottom: 0,
      transition: 'all 0.2s ease',
    },
    content: {
      marginTop: 12,
    },
  }
}

export type TabsTypes = ReturnType<typeof styles>
export type TabsKeys = keyof TabsTypes

export type TabsProps = IProps<TabsTypes>
