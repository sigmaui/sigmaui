import { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {},
    top: {
      display: 'flex',
      alignItems: 'center',
      height: 56
    },
    logo: {
      lineHeight: 0,

      '& img': {
        height: 36
      }
    }
  }
}

export type HeaderTypes = ReturnType<typeof styles>;
export type HeaderKeys = keyof HeaderTypes;

export type HeaderProps = IProps<HeaderTypes>;