import type { IProps, StylesProperties } from './types.ts'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {} as StylesProperties,
    heading: {
      fontWeight: 600,
      marginBottom: 12
    } as StylesProperties,
    toc: {
      '& ol': {
        listStyle: 'none',

        '&.is-collapsible a': {
          paddingLeft: 12
        }
      },

      '& .is-active-link': {
        color: 'base'
      },

      '& li': {
        '& a': {
          display: 'block',
          paddingBlock: 6
        }
      }
    } as StylesProperties,
  }
}

export type TableOfContentTypes = ReturnType<typeof styles>
export type TableOfContentKeys = keyof TableOfContentTypes

export type TableOfContentProps = IProps<TableOfContentTypes>
