import { IProps } from './types.ts';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
  };
};

export type SidebarTypes = ReturnType<typeof styles>;
export type SidebarKeys = keyof SidebarTypes;

export type SidebarProps = IProps<SidebarTypes>;
