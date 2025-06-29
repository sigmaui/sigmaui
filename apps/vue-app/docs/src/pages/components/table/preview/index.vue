<template>
  <div :class="classes.getClass('demoSection')">
    <h2 v-if="showDemoTitle" :class="classes.getClass('demoTitle')">Demo</h2>
    <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
      <Table 
        :data="tableData" 
        :columns="columns"
        :enable-sorting="true"
        :enable-pagination="true"
        :page-size="5"
      />
    </ThemeProvider>
  </div>
</template>

<script lang="ts">
import { tablePreviewStyles, TablePreviewTypes } from './xStyles.ts';
import { ref, h } from 'vue';
import type { ColumnDef } from '@tanstack/vue-table';
import StatusCell from 'packages/vue/src/components/table/src/StatusCell.vue';

interface Props {
  showDemoTitle?: boolean;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  status: string;
}
</script>

<script setup lang="ts">
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import Table from 'packages/vue/src/components/table/src/index.vue';
import { getTheme } from 'packages/common/theme';
import { themeConfig } from '../../../../theme/config';

const props = withDefaults(defineProps<Props>(), {
  showDemoTitle: true
});

const { theme, themeVariant } = getTheme();

const { classes } = withStyleX(tablePreviewStyles)({
  displayName: 'TablePreview',
  rawProps: {}
});

// Sample data
const tableData = ref<Person[]>([
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30, status: 'Active' },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25, status: 'Inactive' },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 35, status: 'Active' },
  { id: 4, firstName: 'Alice', lastName: 'Brown', age: 28, status: 'Pending' },
  { id: 5, firstName: 'Charlie', lastName: 'Wilson', age: 32, status: 'Active' },
  { id: 6, firstName: 'Diana', lastName: 'Davis', age: 27, status: 'Inactive' },
]);

// Column definitions with custom status cell
const columns = ref<ColumnDef<Person>[]>([
  { accessorKey: 'id', header: 'ID', size: 60 },
  { accessorKey: 'firstName', header: 'First Name', size: 150 },
  { accessorKey: 'lastName', header: 'Last Name', size: 150 },
  { accessorKey: 'age', header: 'Age', size: 80 },
  { 
    accessorKey: 'status', 
    header: 'Status', 
    size: 120,
    cell: ({ getValue }) => h(StatusCell, { value: getValue() as string })
  },
]);
</script> 