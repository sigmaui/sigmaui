import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'inner' | 'loader' | 'text' | 'full' | 'center';

export const styles = ({
  renderer,
  theme = {},
  size = 48,
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  const spinner = renderer?.renderKeyframe(() => {
    return {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    };
  }, {});

  return {
    wrapper: {
      textAlign: 'center',
      lineHeight: 0,
    },
    inner: {
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    loader: {
      width: size,
      height: size,
      margin: '0 auto',
      textIndent: '-12345px',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: theme.fn?.rgba(`${theme.colors?.base}`, 0.2),
      borderLeftColor: `${theme.colors?.base}!important`,
      borderRadius: '50%',
      animation: `${spinner} 600ms infinite linear`,
      zIndex: 10000,
    },
    text: {
      lineHeight: 'normal',
      marginTop: 3,
    },
    full: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
};

export type LoadingTypes = ReturnType<typeof styles>;
export type LoadingKeys = keyof LoadingTypes;

export type LoadingProps = IProps<LoadingTypes>;
