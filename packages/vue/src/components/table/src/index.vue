<script lang="ts">
import { tableStyles, TableTypes } from 'packages/common/components/table/xStyles';
</script>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  useVueTable, 
  getCoreRowModel, 
  getSortedRowModel, 
  getPaginationRowModel, 
  getFilteredRowModel,
  type ColumnDef,
  type RowData
} from '@tanstack/vue-table';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import type { TableProps } from './types';
import TableHeader from './header/index.vue';
import TableBody from './body/index.vue';
import TablePagination from './pagination/index.vue';

const rawProps = defineProps<TableProps<TableTypes>>();

const { classes, props } = withStyleX(tableStyles)({
  displayName: 'table',
  rawProps
});

// Ensure all props have safe defaults
const safeData = computed(() => props.data || []);
const safeColumns = computed(() => props.columns || []);
const safePageSize = computed(() => props.pageSize || 10);
const safePageSizeOptions = computed(() => props.pageSizeOptions || [5, 10, 20, 50]);
const safeEnableSorting = computed(() => props.enableSorting ?? true);
const safeEnablePagination = computed(() => props.enablePagination ?? true);
const safeEnableColumnFilters = computed(() => props.enableColumnFilters ?? false);
const safeEnableRowSelection = computed(() => props.enableRowSelection ?? false);

const sorting = ref([]);
const columnFilters = ref([]);
const rowSelection = ref({});
const pagination = ref({
  pageIndex: 0,
  pageSize: safePageSize.value,
});

const table = useVueTable({
  get data() {
    return safeData.value;
  },
  get columns() {
    return safeColumns.value;
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onSortingChange: (updater) => {
    sorting.value = typeof updater === 'function' ? updater(sorting.value) : updater;
  },
  onColumnFiltersChange: (updater) => {
    columnFilters.value = typeof updater === 'function' ? updater(columnFilters.value) : updater;
  },
  onRowSelectionChange: (updater) => {
    rowSelection.value = typeof updater === 'function' ? updater(rowSelection.value) : updater;
  },
  onPaginationChange: (updater) => {
    pagination.value = typeof updater === 'function' ? updater(pagination.value) : updater;
  },
  get state() {
    return {
      get sorting() {
        return sorting.value;
      },
      get columnFilters() {
        return columnFilters.value;
      },
      get rowSelection() {
        return rowSelection.value;
      },
      get pagination() {
        return pagination.value;
      },
    };
  },
  enableSorting: safeEnableSorting.value,
  enableColumnFilters: safeEnableColumnFilters.value,
  enableRowSelection: safeEnableRowSelection.value,
});
</script>

<template>
  <div>
    <table :class="classes.getClass('root')">
      <TableHeader 
        :table="table" 
        :enable-sorting="safeEnableSorting" 
      />
      <TableBody :table="table" />
    </table>

    <!-- Pagination -->
    <TablePagination 
      v-if="safeEnablePagination" 
      :table="table" 
      :page-size-options="safePageSizeOptions" 
    />
  </div>
</template>