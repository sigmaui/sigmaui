import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'list' | 'trigger' | 'indicator' | 'content'

export const styles = ({ theme = {} }: IProps<any>): Record<ClassKeys, StylesProperties> => {
  // console.log('theme', theme)

  return {
    wrapper: {},
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
      width: 'var(--active-tab-width)',
      height: 2,
      backgroundColor: theme.colors?.base,
      left: 0,
      bottom: 0,
      translate: 'var(--active-tab-left) -50%',
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
