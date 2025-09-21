import type { ReactNode, SVGProps } from 'react';
import type { FCWithStylesProps, StylesProperties } from '@sigmaui-kit/types';

export type { StylesProperties }

export interface IProps<Styles> extends FCWithStylesProps<Styles> {
  icon: string | ReactNode
  iconMap?: { [key: string]: any }
  svgProps?: SVGProps<SVGSVGElement>
  dangerouslySetInnerHTML?: { __html: string }
}
