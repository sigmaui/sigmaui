import type { IProps, StylesProperties } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      '&[data-orientation="vertical"]': {
        display: 'block',
      },
      '&[data-orientation="horizontal"]': {
        display: 'flex',
        gap: 12,
      },
    } as StylesProperties,
    itemGroup: {
      '&:not(:last-child)': {
        marginBottom: 24,
      },
    } as StylesProperties,
    itemGroupLabel: {
      opacity: 0.5,
      lineHeight: 32,
    } as StylesProperties,
    item: {
      display: 'block',
      height: 32,
      lineHeight: 32,
      cursor: 'pointer',

      '&._active': {
        color: 'active'
      }
    } as StylesProperties,
  }
}

export type MenuTypes = ReturnType<typeof styles>
export type MenuKeys = keyof MenuTypes

export type MenuProps = IProps<MenuTypes>
