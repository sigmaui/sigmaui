import { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'prefix' | 'suffix';

export const styles = ({ theme = {}, size, variant }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)

  return {
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      paddingBlock: 8,
      paddingInline: 12,
      cursor: 'pointer',
      background: !variant ? 'button.background' : undefined,
      color: !variant ? 'button.text' : undefined,
      size,
      variant,

      ':hover': {
        background: 'button.hover.background',
      },

      ':active': {
        background: 'button.active.background',
      },

      '&[disabled]': {
        cursor: 'not-allowed',
      },
    },
    prefix: {
      marginRight: 6,
    },
    suffix: {
      marginLeft: 6,
    },
  }
}

export type ButtonTypes = ReturnType<typeof styles>
export type ButtonKeys = keyof ButtonTypes

export type ButtonProps = IProps<ButtonTypes>
