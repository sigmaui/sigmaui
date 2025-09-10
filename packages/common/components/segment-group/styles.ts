import type { IProps, StylesProperties } from './types'

export type ClassKeys = 'wrapper' | 'item' | 'label'

export const styles = ({ theme = {}, isThumbLine }: IProps<any>): Record<ClassKeys, StylesProperties> => {
  return {
    wrapper: {
      '& .sm-segment-group-group': {
        display: 'flex',
        position: 'relative'
      },

      '& .sm-segment-group-item-input': {
        position: 'absolute',
        width: 0,
        height: 0
      },

      '& .sm-segment-group-thumb': {
        backgroundColor: theme.colors?.base,
        position: 'absolute',
        width: 0,
        height: isThumbLine ? 2 : '100%',
        bottom: 0,
        transition: 'transform .3s cubic-bezier(.645,.045,.355,1),width .3s cubic-bezier(.645,.045,.355,1)'
      }
    },
    item: {
      position: 'relative',
      height: 28,
      zIndex: 2,
      paddingInline: 12,
      cursor: 'pointer',

      '&[class*="-selected"]': {
        backgroundColor: !isThumbLine ? theme.colors?.base : undefined,

        '&:after': isThumbLine && {
          content: '""',
          position: 'absolute',
          backgroundColor: theme.colors?.base,
          width: '100%',
          height: 2,
          left: 0,
          bottom: 0
        }
      },

      '&[class*="-disabled"]': {
        cursor: 'not-allowed'
      }
    },
    label: {}
  }
}

export type SegmentGroupTypes = ReturnType<typeof styles>
export type SegmentGroupKeys = keyof SegmentGroupTypes
export type SegmentGroupProps = IProps<SegmentGroupTypes>
