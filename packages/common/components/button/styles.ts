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
      color: theme.colors?.text,
      borderRadius: theme.base?.borderRadius,

      ':hover': {
        backgroundColor: theme.fn?.lighten?.(theme.colors?.base, 0.1)
      }
    }
  }
}

export type ButtonTypes = ReturnType<typeof styles>;
export type ButtonKeys = keyof ButtonTypes;

export type ButtonProps = IProps<ButtonTypes>;