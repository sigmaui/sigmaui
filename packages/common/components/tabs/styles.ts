import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    trigger: {},
    content: {}
  }
}

export type TabsTypes = ReturnType<typeof styles>;
export type TabsKeys = keyof TabsTypes;

export type TabsProps = IProps<TabsTypes>;