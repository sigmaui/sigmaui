import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'image'

export const styles = ({}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  return {
    wrapper: {
      lineHeight: 0
    },
    image: {}
  }
}

export type IconTypes = ReturnType<typeof styles>
export type IconKeys = keyof IconTypes
export type IconProps = IProps<IconTypes>
