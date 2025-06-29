<script lang="ts">
import { clsx } from 'clsx';
import { segmentGroupStyles, SegmentGroupTypes } from 'packages/common/components/segment-group/xStyles';
</script>

<script setup lang="ts">
import { SegmentGroup, useSegmentGroup } from '@ark-ui/vue';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import type { SegmentGroupProps, SegmentItem } from './types';

const rawProps = defineProps<SegmentGroupProps<SegmentGroupTypes>>();

const { classes, props } = withStyleX(segmentGroupStyles)({
  displayName: 'segment-group',
  rawProps
});

const { styles, orientation = 'horizontal' } = props;

const segmentGroup = useSegmentGroup({
  orientation,
  defaultValue: props.defaultValue,
  onValueChange: props.onValueChange
});

// Default items if none provided
const items: SegmentItem[] = props.items || [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

console.log('segmentGroup', rawProps.onValueChange);

const isHorizontal = orientation === 'horizontal'
</script>

<template>
  <SegmentGroup.RootProvider
      :class="clsx(classes.getClass('root', isHorizontal && 'horizontal'))"
      :value="segmentGroup"
  >
    <SegmentGroup.Label v-if="props.label" :class="classes.getClass('label')">
      {{ props.label }}
    </SegmentGroup.Label>
    <SegmentGroup.Indicator :class="classes.getClass('indicator')"/>
    <SegmentGroup.Item
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :class="classes.getClass('item')"
    >
      <SegmentGroup.ItemText :class="classes.getClass('itemText')">
        {{ item.label }}
      </SegmentGroup.ItemText>
      <SegmentGroup.ItemControl/>
      <SegmentGroup.ItemHiddenInput/>
    </SegmentGroup.Item>
  </SegmentGroup.RootProvider>
</template> 