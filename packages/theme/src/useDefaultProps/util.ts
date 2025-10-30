import deepmerge from 'deepmerge';

import type { StylesObject, VariantsStyle } from '../types';
import type { ComponentBaseProps } from './useDefaultProps';

export function resolveStylesVariant<
  ComponentProps extends ComponentBaseProps<SemanticName>,
  SemanticName extends string,
>(
  styles: Record<SemanticName, { root: StylesObject; variants?: VariantsStyle<ComponentProps> }>,
  overrideStyles: Partial<
    Record<SemanticName, { root: StylesObject; variants?: VariantsStyle<ComponentProps> }>
  >,
  props: ComponentProps
): Record<SemanticName, StylesObject> {
  const resolveOne = ({
    base,
    override,
    propsStyles,
  }: {
    base?: { root: StylesObject; variants?: VariantsStyle<ComponentProps> };
    override?: { root: StylesObject; variants?: VariantsStyle<ComponentProps> };
    propsStyles: StylesObject;
  }): StylesObject => {
    if (!base && !override) return {};

    const { root: baseRoot = {}, variants: baseVariants = [] } = base ?? {};
    const { root: overrideRoot = {}, variants: overrideVariants = [] } = override ?? {};

    const matchedBase = baseVariants.filter(v => v.props(props)).map(v => v.style);
    const matchedOverride = overrideVariants.filter(v => v.props(props)).map(v => v.style);

    return deepmerge.all([
      baseRoot,
      ...matchedBase,
      overrideRoot,
      ...matchedOverride,
      propsStyles || {},
    ]);
  };

  const result = {} as Record<SemanticName, StylesObject>;

  for (const [semanticName, style] of Object.entries(styles) as [
    SemanticName,
    { root: StylesObject; variants?: VariantsStyle<ComponentProps> },
  ][]) {
    const override = overrideStyles?.[semanticName];
    const propsStyles = props.styles?.[semanticName] ?? {};
    result[semanticName] = resolveOne({ base: style, override, propsStyles });
  }

  return result;
}
