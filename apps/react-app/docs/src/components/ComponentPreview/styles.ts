import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {}
  }
}

export type ComponentPreviewTypes = ReturnType<typeof styles>;
export type ComponentPreviewKeys = keyof ComponentPreviewTypes;

export type ComponentPreviewProps = IProps<ComponentPreviewTypes>;