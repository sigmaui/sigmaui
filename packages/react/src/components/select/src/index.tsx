import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { Portal, Select, createListCollection, useSelectContext } from '@ark-ui/react';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { SelectProps } from './types';
import type { SelectTypes, SelectKeys } from './xStyles';

import { selectStyles } from './xStyles';

export type {
  SelectTypes,
  SelectKeys
}

export {
  selectStyles
}

const SigmaSelect: FC<SelectProps<SelectTypes>> = ({
  prefixCls = 'sm-select',
  className,
  classes,
  styles = {},
  options
}) => {
  const collection = createListCollection(options);

  return (
    <Select.Root
      className={clsx(prefixCls, className, classes.getClass('root', styles.root))}
      collection={collection}
      onSelect={(value) => {
        console.log('onSelect', value)
      }}
    >
      <Select.Label
        className={classes.getClass('label', styles.label)}
      >
        Framework
      </Select.Label>
      <Select.Control
        className={classes.getClass('control', styles.control)}
      >
        <Select.Trigger
          className={classes.getClass('trigger', styles.trigger)}
        >
          <Select.ValueText
            placeholder="Select a Framework"
            className={classes.getClass('valueText', styles.valueText)}
          />
          <Select.Indicator
            className={classes.getClass('indicator', styles.indicator)}
          />
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            className={classes.getClass('content', styles.content)}
          >
            <Select.ItemGroup
              className={classes.getClass('itemGroup', styles.itemGroup)}
            >
              <Select.ItemGroupLabel
                className={classes.getClass('itemGroupLabel', styles.itemGroupLabel)}
              >
                Frameworks
              </Select.ItemGroupLabel>
              {
                collection.items.map(({ value, label }) => (
                  <Select.Item
                    className={classes.getClass('item', styles.item)}
                    key={value}
                    item={value}
                  >
                    <Select.ItemText>{label}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                ))
              }
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect/>
    </Select.Root>
  )
}

SigmaSelect.displayName = 'Select';

export default withStyleX(selectStyles)(SigmaSelect)