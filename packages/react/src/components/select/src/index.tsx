import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import type { FC } from 'react'
import { Select, createListCollection } from '@ark-ui/react'
import { withStyles } from '@microui-kit/with-styles'

import { styles, type SelectProps } from 'packages/common/components/select/styles'
import { CheckIcon, ChevronTopIcon, ClearIcon } from './icons'

const SigmaSelect = <T extends Record<string, any>>({
  prefixCls = 'sm-select',
  className,
  classes,
  _style,
  options,
  label,
  placeholder,
  itemGroupLabel,
  clearIcon,
  renderItem,
  size = 'small',
  ...rest
}: SelectProps<T>) => {
  const collection = createListCollection(options)

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (rootRef.current) {
      const { width } = rootRef.current.getBoundingClientRect()
      if (contentRef.current) {
        contentRef.current.style.width = `${width}px`
      }
      if (triggerRef.current) {
        triggerRef.current.style.width = `${width}px`
      }
    }
  }, [_style])
  return (
    <Select.Root
      ref={rootRef}
      className={classNames(prefixCls, className, classes?.wrapper)}
      collection={collection}
      {...rest}
    >
      {label && <Select.Label className={classes?.label}>{label}</Select.Label>}
      <Select.Control className={classes?.control}>
        <Select.Trigger
          ref={triggerRef}
          className={classNames(classes?.trigger, classes?.[`trigger-${size}`])}
        >
          <Select.ValueText
            className={classes?.valueText}
            placeholder={placeholder}
          />
          <Select.Indicator className={classes?.indicator} />
        </Select.Trigger>
        <Select.ClearTrigger className={classes?.clearTrigger}>
          {clearIcon || <ClearIcon size={16} />}
        </Select.ClearTrigger>
        <div className={classNames('select__suffix', classes?.chevronTopIcon)}>
          <ChevronTopIcon size={16} />
        </div>
      </Select.Control>
      <Select.Positioner className={classes?.positioner}>
        <Select.Content
          ref={contentRef}
          className={classNames(classes?.content, 'select__content')}
        >
          <Select.ItemGroup className={classes?.itemGroup}>
            {itemGroupLabel && (
              <Select.ItemGroupLabel className={classes?.itemGroupLabel}>{itemGroupLabel}</Select.ItemGroupLabel>
            )}
            {collection.items.map(({ value, label }) => (
              <Select.Item
                className={classes?.item}
                key={value}
                item={value}
              >
                <Select.ItemText className={classes?.itemText}>{label}</Select.ItemText>
                <Select.ItemIndicator className={classes?.indicator}>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
      <Select.HiddenSelect />
    </Select.Root>
  )
}

SigmaSelect.displayName = 'Select'

export default withStyles<SelectProps<any>>(styles)(SigmaSelect)
