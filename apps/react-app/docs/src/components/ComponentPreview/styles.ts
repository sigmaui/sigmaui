import { IProps } from './types'

export const styles = ({ theme = {} }: IProps<any, any>) => {
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
