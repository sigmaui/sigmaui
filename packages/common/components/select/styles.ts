import type { IProps, StylesProperties } from './types'
import { heights } from "../../theme/tokens/sizes.ts";

export type ClassKeys = 'wrapper' | 'popup' | 'prefix' | 'suffix' | 'input'

export const styles = ({ theme = {}, size, variant }: IProps<any>): Record<ClassKeys, StylesProperties> => {
  console.log('size', size)

  return {
    wrapper: {
      cursor: 'pointer',

      '&.sm-select-single': {},

      '& .sm-select-selector': {
        position: 'relative',
        border: '1px solid',
        borderColor: theme.colors?.border,
        paddingInline: 12,
        size,
        variant
      },

      '& .sm-select-selection-search': {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%',

        '& input': {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          border: 0,
          cursor: 'pointer'
        }
      },

      '& .sm-select-selection-placeholder, & .sm-select-selection-item': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      },

      '& .sm-select-selection-placeholder': {
        color: theme.colors?.placeholder,
      },

      '&[class*="-focused"]': {
        '& .sm-select-selector': {
          boxShadow: theme.shadows?.focused,
          borderColor: theme.colors?.base
        },
      }
    },
    popup: {
      position: 'fixed',

      '&[class*="-hidden"]': {
        display: 'none'
      }
    },
    prefix: {},
    suffix: {},
    input: {}
  }
}

export type SelectTypes = ReturnType<typeof styles>
export type SelectKeys = keyof SelectTypes
export type SelectProps = IProps<SelectTypes>
