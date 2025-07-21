import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {}
  }
}

export type CodeDemoTypes = ReturnType<typeof styles>;
export type CodeDemoKeys = keyof CodeDemoTypes;

export type CodeDemoProps = IProps<CodeDemoTypes>;