import type { IProps } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      '& > *:not(:last-child)': {
        marginBottom: 12,
      },
    },
  };
};

export type MDXContentTypes = ReturnType<typeof styles>;
export type MDXContentKeys = keyof MDXContentTypes;

export type MDXContentProps = IProps<MDXContentTypes>;
