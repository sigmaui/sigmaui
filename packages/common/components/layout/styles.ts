import { IProps } from './types';

export const styles = ({ theme = {}, isSidebar }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    header: {},
    main: {
      display: 'flex'
    },
    sidebar: {
      position: 'fixed',
      width: 220
    },
    content: {
      marginLeft: isSidebar ? 220 : undefined,
      width: isSidebar ? `calc(100% - ${theme.fn?.pxToRem?.(220)})` : '100%'
    }
  }
}

export type LayoutTypes = ReturnType<typeof styles>;
export type LayoutKeys = keyof LayoutTypes;

export type LayoutProps = IProps<LayoutTypes>;