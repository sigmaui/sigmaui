import type { IProps, StylesProperties } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    list: {
      position: 'relative',
      display: 'flex',
      gap: 12
    } as StylesProperties,
    trigger: {
      paddingBottom: 12,
      paddingInline: 12,
      border: 0,
      backgroundColor: 'transparent',
      cursor: 'pointer'
    } as StylesProperties,
    indicator: {
      width: 'var(--width)',
      height: '2px',
      backgroundColor: theme.colors?.base,
      bottom: 0,
      transition: 'all 0.2s ease'
    } as StylesProperties,
    content: {
      marginTop: 12
    } as StylesProperties
  }
}

export type TabsTypes = ReturnType<typeof styles>;
export type TabsKeys = keyof TabsTypes;

export type TabsProps = IProps<TabsTypes>;