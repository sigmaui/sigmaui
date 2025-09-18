import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'inner' | 'arrow' | 'root' | 'body';

export const styles = ({ prefixCls, theme = {}, size }: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  // console.log('theme', theme)
  return {
    wrapper: {},
    root: {
      position: 'absolute',
      zIndex: 'tooltip',

      [`&.${prefixCls}-hidden`]: {
        display: 'none'
      },

      [`& .${prefixCls}-body`]: {
        backgroundColor: 'tooltip.background',
        color: 'tooltip.text',
        paddingBlock: 6,
        paddingInline: 8,
        borderRadius: 'default',
        size: `text.${size}`
      }
    }
  }
}

export type TooltipTypes = ReturnType<typeof styles>
export type TooltipKeys = keyof TooltipTypes

export type TooltipProps = IProps<TooltipTypes>
