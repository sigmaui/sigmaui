import type { ReactNode } from 'react'
import type { FCWithStylesProps, StylesProperties } from 'packages/common/types'

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  suffix?: ReactNode
  action?: 'click' | 'pointer'
  iconRender?: (visible: boolean) => ReactNode;
  isTooltip?: boolean;
}
