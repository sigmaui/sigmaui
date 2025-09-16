import { IProps, StylesProperties } from './types';

export const styles = ({ theme = {}, size, variant }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      border: 0,
      paddingBlock: 8,
      paddingInline: 12,
      cursor: 'pointer',
      backgroundColor: !variant && theme.colors?.base,
      color: !variant && theme.colors?.text,
      borderRadius: theme.base?.borderRadius,
      size,
      variant,

      ':hover': {
        backgroundColor: theme.fn?.lighten?.(theme.colors?.base, 0.1),
      },

      '&[disabled]': {
        cursor: 'not-allowed',
      },
    } as StylesProperties,
    prefix: {
      marginRight: 6,
    } as StylesProperties,
    suffix: {
      marginLeft: 6,
    } as StylesProperties,
  }
}

export type ButtonTypes = ReturnType<typeof styles>
export type ButtonKeys = keyof ButtonTypes

export type ButtonProps = IProps<ButtonTypes>
