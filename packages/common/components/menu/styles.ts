import { IProps, TStyles } from './types';

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      '&[data-orientation="vertical"]': {
        display: 'block'
      },
      '&[data-orientation="horizontal"]': {
        display: 'flex',
        gap: 12
      }
    },
    itemGroup: {
      '&:not(:last-child)': {
        marginBottom: 24
      }
    },
    itemGroupLabel: {
      opacity: 0.5,
      lineHeight: 32
    },
    item: {
      display: 'block',
      height: 32,
      lineHeight: 32,
      cursor: 'pointer'
    }
  }
}

export type MenuTypes = ReturnType<typeof styles>;
export type MenuKeys = keyof MenuTypes;

export type MenuProps = IProps<MenuTypes>;