import { IProps } from './types'

export const styles = ({ theme = {} }: IProps<any>) => {
  // console.log('theme', theme)

  return {
    wrapper: {
      border: '1px solid',
      borderColor: '#ddd',
      borderRadius: theme.base?.borderRadius,
      overflow: 'hidden',
    },
  }
}

export type ComponentPreviewTypes = ReturnType<typeof styles>
export type ComponentPreviewKeys = keyof ComponentPreviewTypes

export type ComponentPreviewProps = IProps<ComponentPreviewTypes>
