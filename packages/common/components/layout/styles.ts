import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    content: {}
  }
}

export type LayoutTypes = ReturnType<typeof styles>;
export type LayoutKeys = keyof LayoutTypes;

export type LayoutProps = IProps<LayoutTypes>;