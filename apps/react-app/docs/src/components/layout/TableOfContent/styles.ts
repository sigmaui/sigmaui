import type { IProps, StylesProperties } from './types.ts'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {} as StylesProperties,
  }
}

export type TableOfContentTypes = ReturnType<typeof styles>
export type TableOfContentKeys = keyof TableOfContentTypes

export type TableOfContentProps = IProps<TableOfContentTypes>
