import type { IProps, StylesProperties } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      position: 'relative',
    } as StylesProperties,
    content: {
      '& > *:not(:last-child)': {
        marginBottom: 12,
      },
    } as StylesProperties,
  };
};

export type PageTypes = ReturnType<typeof styles>;
export type PageKeys = keyof PageTypes;

export type PageProps = IProps<PageTypes>;
