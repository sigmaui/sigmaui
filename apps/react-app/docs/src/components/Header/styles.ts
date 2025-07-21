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
    left: {
      display: 'flex'
    },
    right: {},
    logo: {
      lineHeight: 0,
      marginRight: 36,

      '& img': {
        height: 36
      }
    }
  }
}

export type HeaderTypes = ReturnType<typeof styles>;
export type HeaderKeys = keyof HeaderTypes;

export type HeaderProps = IProps<HeaderTypes>;