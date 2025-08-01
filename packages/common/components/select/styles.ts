import { ITheme } from 'packages/common/theme/config'
import type { IProps, StylesProperties } from './types'
import { Theme } from '@microui-kit/theme'

type ClassNames =
  | 'wrapper'
  | 'label'
  | 'control'
  | 'trigger'
  | 'valueText'
  | 'content'
  | 'positioner'
  | 'itemGroup'
  | 'itemGroupLabel'
  | 'item'
  | 'indicator'
  | 'clearTrigger'
  | 'chevronTopIcon'
  | 'itemText'
  | 'trigger-small'
  | 'trigger-middle'
  | 'trigger-large'
export const styles: ({
  theme,
  renderer,
}: {
  theme: ITheme
  renderer: any
}) => Record<ClassNames, StylesProperties> = ({ theme, renderer }: { theme: ITheme; renderer: any }) => {
  const fadeIn = renderer.renderKeyframe(() => {
    return {
      '0%': {
        opacity: 0,
        transform: 'translateY(-4px)',
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
    }
  })
  const fadeOut = renderer.renderKeyframe(() => {
    return {
      '0%': {
        opacity: 1,
        transform: 'translateY(0)',
      },
      '100%': {
        opacity: 0,
        transform: 'translateY(-4px)',
      },
    }
  })
  return {
    wrapper: {
      position: 'relative',
      width: 240,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    label: {
      marginBottom: 4,
      fontWeight: 600,
    },
    control: {
      position: 'relative',
    },
    'trigger-small': {
      height: 32,
    },
    'trigger-middle': {
      height: 38,
    },
    'trigger-large': {
      height: 44,
    },
    positioner: {
      top: '-6px !important',
    },
    trigger: {
      paddingBlock: 8,
      paddingInline: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 8,
      textAlign: 'left',
      backgroundColor: theme.colors.background,
      border: `1px solid ${theme.colors.border}`,
      cursor: 'pointer',
      overflow: 'hidden',
    },
    itemText: {
      overflow: 'hidden',
      marginRight: 16,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    clearTrigger: {
      outline: 'none',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      position: 'absolute',
      right: 24,
      top: '50%',
      height: '-webkit-fill-available',
      transform: 'translateY(-50%)',
    },
    valueText: {
      lineClamp: 1,
      textOverflow: 'ellipsis',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      marginRight: 32,
      fontSize: 16,
    },
    content: {
      backgroundColor: 'white',
      boxShadow: theme.shadows.lg,
      padding: 6,
      paddingRight: 0,
      zIndex: 9999,
      borderRadius: 8,
      maxHeight: 200,
      overflowY: 'scroll',
      border: '1px solid rgba(41, 43, 51, 0.1)',
      '&:is([data-state=open])': {
        animation: fadeIn,
        animationDuration: '0.25s',
        animationTimingFunction: 'ease-out',
      },
      '&:is([data-state=closed])': {
        animation: fadeOut,
        animationDuration: '0.25s',
        animationTimingFunction: 'ease-out',
      },
    },
    itemGroup: {},
    itemGroupLabel: {
      fontSize: 14,
      color: theme.colors.neutral,
      marginBottom: 4,
      fontWeight: 600,
      paddingInline: 8,
    },
    item: {
      paddingInline: 8,
      position: 'relative',
      paddingBlock: 6,
      display: 'flex',
      alignItems: 'center',
      lineClamp: 1,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      borderRadius: 6,
      '&:is([data-state=checked])': {
        backgroundColor: theme?.colors.fillWeak,
      },
      '&:hover': {
        backgroundColor: theme?.colors.fillWeak,
      },
    },
    indicator: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
    },
    chevronTopIcon: {
      position: 'absolute',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 8,
      top: '50%',
      transform: 'translateY(-50%) rotate(180deg)',
    },
  }
}

export type SelectTypes = ReturnType<typeof styles>
export type SelectKeys = keyof SelectTypes
export type SelectProps<T> = IProps<SelectTypes, T>
