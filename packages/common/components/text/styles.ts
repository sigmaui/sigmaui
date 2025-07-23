import { IProps, StylesProperties } from './types'

export const styles = ({ theme = {}, size }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      size,
    } as StylesProperties,
  }
}

export type TextTypes = ReturnType<typeof styles>
export type TextKeys = keyof TextTypes

export type TextProps = IProps<TextTypes>
