import { withStyles as microWithStyles } from '@microui-kit/with-styles'

export const withStyles = <T extends unknown>(
  styles: any,
  params: {
    isWithDisplayName?: boolean
    isWithPureStyle?: boolean
    prefixCls?: string
  } = {},
) => {
  return microWithStyles<T>(styles, {
    prefixCls: 'sm',
    ...params
  })
}

export default withStyles
