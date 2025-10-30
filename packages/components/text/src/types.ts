import type { ComponentBaseProps } from '@sigma-ui-kit/theme';
import type { LiteralUnion } from '@sigma-ui-kit/util/type';

export type SematicName = 'root';

export type VariantKeys =
  | 'text-xxs'
  | 'text-xs'
  | 'text-sm'
  | 'text-md'
  | 'text-lg'
  | 'text-xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl';

export type ColorKeys =
  | 'strong'
  | 'weak'
  | 'disabled'
  | 'brand'
  | 'error'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'
  | 'inverse'
  | 'whiteFixed';

export interface TextProps extends HTMLParagraphElement, ComponentBaseProps<SematicName> {
  variant?: VariantKeys;
  color?: ColorKeys;
}
