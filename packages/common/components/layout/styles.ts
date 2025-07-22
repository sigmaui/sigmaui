import type { IProps, StylesProperties } from './types';

export const styles = ({ theme = {}, isSidebar }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    header: {},
    main: {
      display: 'flex'
    } as StylesProperties,
    sidebar: {
      position: 'fixed',
      width: 220
    } as StylesProperties,
    content: {
      marginLeft: isSidebar ? 220 : undefined,
      width: isSidebar ? `calc(100% - ${theme.fn?.pxToRem?.(220)})` : '100%'
    } as StylesProperties
  }
}

export type LayoutTypes = ReturnType<typeof styles>;
export type LayoutKeys = keyof LayoutTypes;

export type LayoutProps = IProps<LayoutTypes>;