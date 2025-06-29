<script lang="ts">
import { selectStyles, SelectTypes } from 'packages/common/components/select/xStyles';
</script>

<script setup lang="ts">
import { Select, createListCollection } from '@ark-ui/vue';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import type { SelectProps } from './types';

const rawProps = defineProps<SelectProps<SelectTypes>>();

const { classes, props } = withStyleX(selectStyles)({
  displayName: 'select',
  rawProps
});

const { styles } = props;

const collection = createListCollection({
  items: ['React1', 'Solid', 'Vue', 'Svelte'],
})
</script>

<template>
  <Select.Root :collection="collection" :class="classes.getClass('root')">
    <Select.Label>Framework</Select.Label>
    <Select.Control>
      <Select.Trigger :class="classes.getClass('trigger')">
        <Select.ValueText placeholder="Select a Framework"/>
        <Select.Indicator>
        </Select.Indicator>
      </Select.Trigger>
      <Select.ClearTrigger>Clear</Select.ClearTrigger>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
            <Select.Item v-for="item in collection.items" :key="item" :item="item">
              <Select.ItemText>{{ item }}</Select.ItemText>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
            </Select.Item>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
    <Select.HiddenSelect/>
  </Select.Root>
</template>