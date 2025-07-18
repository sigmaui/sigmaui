import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      border: 0,
      paddingBlock: 8,
      paddingInline: 12,
      cursor: 'pointer',
      backgroundColor: theme.colors?.base,

      ':hover': {
        backgroundColor: 'red'
      }
    }
  }
}

export type ButtonTypes = ReturnType<typeof styles>;
export type ButtonKeys = keyof ButtonTypes;

export type ButtonProps = IProps<ButtonTypes>;