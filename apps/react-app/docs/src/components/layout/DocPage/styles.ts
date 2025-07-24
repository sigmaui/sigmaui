import type { IProps, StylesProperties } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      position: 'relative'
    } as StylesProperties,
    main: {} as StylesProperties,
    content: {} as StylesProperties,
    info: {
      marginBottom: 24
    } as StylesProperties,
    title: {} as StylesProperties,
    description: {
      marginTop: 12
    } as StylesProperties
  }
}

export type DocPageTypes = ReturnType<typeof styles>
export type DocPageKeys = keyof DocPageTypes

export type DocPageProps = IProps<DocPageTypes>
