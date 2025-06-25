import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { Portal, Select, createListCollection } from '@ark-ui/react';
import { withStyleX } from '@packages/react/hooks/with-stylex';

import type { SelectProps } from './types';
import type { StylesType } from './xStyles';

import xStyles from './xStyles';

const SigmaSelect: FC<SelectProps<StylesType>> = ({
  prefixCls = 'sm-select',
  className,
  classes,
  options
}) => {
  const collection = createListCollection(options);

  return (
    <Select.Root
      className={clsx(prefixCls, className, classes.getClass('root'))}
      collection={collection}
      onSelect={(value) => {
        console.log('onSelect', value)
      }}
    >
      <Select.Label
        className={classes.getClass('label')}
      >
        Framework
      </Select.Label>
      <Select.Control
        className={classes.getClass('control')}
      >
        <Select.Trigger
          className={classes.getClass('trigger')}
        >
          <Select.ValueText
            placeholder="Select a Framework"
            className={classes.getClass('valueText')}
          />
          <Select.Indicator
            className={classes.getClass('indicator')}
          />
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content
            className={classes.getClass('content')}
          >
            <Select.ItemGroup
              className={classes.getClass('itemGroup')}
            >
              <Select.ItemGroupLabel
                className={classes.getClass('itemGroupLabel')}
              >
                Frameworks
              </Select.ItemGroupLabel>
              {
                collection.items.map(({ value, label }) => (
                  <Select.Item
                    className={classes.getClass('item')}
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

SigmaSelect.displayName = 'SigmaSelect';

export default withStyleX(xStyles)(SigmaSelect)