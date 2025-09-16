import type { IProps, StylesProperties } from './types';

export type ClassKeys = 'wrapper' | 'item' | 'label';

export const styles = ({
  prefixCls,
  theme = {},
  isThumbLine
}: IProps<any>): Partial<Record<ClassKeys, StylesProperties>> => {
  return {
    wrapper: {
      [`& .${prefixCls}-group`]: {
        display: 'flex',
        position: 'relative'
      },

      [`& .${prefixCls}-item-input`]: {
        position: 'absolute',
        width: 0,
        height: 0
      },

      [`& .${prefixCls}-thumb`]: {
        backgroundColor: 'base',
        position: 'absolute',
        width: 0,
        height: isThumbLine ? 2 : '100%',
        bottom: 0,
        transition: 'transform .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)'
      }
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      height: 'default',
      zIndex: 2,
      paddingInline: 12,
      cursor: 'pointer',

      '&[class*="-selected"]': {
        backgroundColor: !isThumbLine ? 'base' : undefined,

        '&:after': isThumbLine && {
          content: '""',
          position: 'absolute',
          backgroundColor: 'base',
          width: '100%',
          height: 2,
          left: 0,
          bottom: 0
        }
      },

      '&[class*="-disabled"]': {
        opacity: 0.5,
        cursor: 'not-allowed'
      }
    },
    label: {}
  }
}

export type SegmentGroupTypes = ReturnType<typeof styles>
export type SegmentGroupKeys = keyof SegmentGroupTypes
export type SegmentGroupProps = IProps<SegmentGroupTypes>
