import type { ReactNode, SVGProps } from 'react'
import type { FCWithStylesProps, StylesProperties, ThemeSize, ThemeVariant } from 'packages/common/types'

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  icon: string | ReactNode
  iconMap?: { [key: string]: any }
  svgProps?: SVGProps<SVGSVGElement>
  dangerouslySetInnerHTML?: { __html: string }
}
