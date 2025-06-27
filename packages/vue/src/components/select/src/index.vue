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

<script lang="ts">
import { selectStyles, SelectTypes } from '../../../../../common/styles/select/xStyles';
</script>

<script setup lang="ts">
import { Select, createListCollection } from '@ark-ui/vue';
import { useStyleX } from '@sigmaui-kit/use-stylex';
import type { SelectProps } from './types';

defineProps<SelectProps<SelectTypes>>();

const { classes } = useStyleX(selectStyles);

const collection = createListCollection({
  items: ['React', 'Solid', 'Vue', 'Svelte'],
})
</script>