import { IProps, StylesProperties } from './types';

export const styles = ({ theme = {}, size, variant }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      outline: 0,
      borderColor: 'border',
      borderStyle: 'solid',
      borderWidth: 1,
      paddingInline: 12,
      size,
      variant,

      '&[disabled]': {
        cursor: 'not-allowed'
      }
    } as StylesProperties
  }
}

export type InputTypes = ReturnType<typeof styles>;
export type InputKeys = keyof InputTypes;

export type InputProps = IProps<InputTypes>;