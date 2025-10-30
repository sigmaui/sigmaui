import type React from 'react';
import type { ComponentBaseProps } from '@sigma-ui-kit/theme';

export type SemanticName = 'root' | 'prefix' | 'suffix' | 'dot';

export type BadgeTone =
  | 'brand'
  | 'grey'
  | 'disable'
  | 'error'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery';

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children' | 'prefix'>,
    ComponentBaseProps<SemanticName> {
  /**
   * The content to display inside the badge
   */
  label: React.ReactNode;
  /**
   * The size variant of the badge
   * @default 'smaller'
   */
  size?: 'smaller' | 'small' | 'standard' | 'big' | 'bigger';

  /**
   * The color tone of the badge
   * @default 'brand'
   */
  tone?:
    | 'brand'
    | 'grey'
    | 'disable'
    | 'error'
    | 'warning'
    | 'success'
    | 'information'
    | 'discovery';

  /**
   * The variant of the badge
   * @default 'outlined'
   */
  variant?: 'outlined' | 'filled';
  /**
   * The icon to display at the start of the badge
   */
  prefix?: React.ReactNode;
  /**
   * The icon to display at the end of the badge
   */
  suffix?: React.ReactNode;
  /**
   * Whether to display a dot instead of a label
   * @default false
   */
  dot?: boolean;
}
