import deepmerge from 'deepmerge';

import type { StylesObject, VariantsStyle } from './types';

export function getMatchingVariants<ComponentBaseProps>(
  variants: VariantsStyle<ComponentBaseProps>,
  props: ComponentBaseProps
): StylesObject {
  const matched = variants
    .filter(variant =>
      Object.entries(variant.props).every(([key, value]) => {
        const propValue = (props as any)[key];
        if (Array.isArray(value)) return value.includes(propValue);
        if (value instanceof RegExp) return value.test(propValue);
        return propValue === value;
      })
    )
    .map(variant => variant.style);

  return deepmerge.all<StylesObject>(matched);
}
