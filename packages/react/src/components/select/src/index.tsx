import React from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import { Select, createListCollection } from '@ark-ui/react';
import { withStyles } from '@microui-kit/with-styles';

import { styles, type SelectProps } from 'packages/common/components/select/styles';

const SigmaSelect: FC<SelectProps> = ({
  prefixCls = 'sm-select',
  className,
  classes,
  options,
  placeholder,
  label,
  itemGroupLabel
}) => {
  const collection = createListCollection(options);

  console.log('collection', collection)

  return (
    <Select.Root
      className={classNames(prefixCls, className, classes?.wrapper)}
      collection={collection}
      onSelect={(value) => {
        console.log('onSelect', value)
      }}
    >
      {
        label
        &&
        <Select.Label className={classes?.label}>
          {label}
        </Select.Label>
      }
      <Select.Control className={classes?.control}>
        <Select.Trigger className={classes?.trigger}>
          <Select.ValueText
            className={classes?.valueText}
            placeholder={placeholder}
          />
          <Select.Indicator className={classes?.indicator}/>
        </Select.Trigger>
        <Select.ClearTrigger>Clear</Select.ClearTrigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content className={classes?.content}>
          <Select.ItemGroup className={classes?.itemGroup}>
            {
              itemGroupLabel
              &&
              <Select.ItemGroupLabel className={classes?.itemGroupLabel}>
                {itemGroupLabel}
              </Select.ItemGroupLabel>
            }
            {
              collection.items.map(({ value, label }) => (
                <Select.Item
                  className={classes?.item}
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
      <Select.HiddenSelect/>
    </Select.Root>
  )
}

SigmaSelect.displayName = 'Select';

export default withStyles<SelectProps>(styles)(SigmaSelect)