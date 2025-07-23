import type { IProps, StylesProperties } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {} as StylesProperties,
  }
}

export type AnchorTypes = ReturnType<typeof styles>
export type AnchorKeys = keyof AnchorTypes

export type AnchorProps = IProps<AnchorTypes>
