<script setup lang="ts">
import { tableStyles } from 'packages/common/components/table/xStyles';
import { withStyleX } from '@packages/vue/hooks/with-stylex';

interface TableHeaderProps {
  table: any;
  enableSorting?: boolean;
}

const props = withDefaults(defineProps<TableHeaderProps>(), {
  enableSorting: true
});

const { classes } = withStyleX(tableStyles)({
  displayName: 'tableHeader',
  rawProps: {}
});

const getSortIcon = (column: any) => {
  if (!column || !column.getCanSort) return null;
  
  try {
    if (!column.getCanSort()) return null;
    
    const isSorted = column.getIsSorted();
    if (isSorted === 'asc') return '↑';
    if (isSorted === 'desc') return '↓';
    return '↕';
  } catch (error) {
    console.warn('Error getting sort icon:', error);
    return null;
  }
};

const renderHeader = (header: any) => {
  if (!header || !header.column || !header.column.columnDef) return '';
  
  try {
    const headerContent = header.column.columnDef.header;
    if (typeof headerContent === 'function') {
      return headerContent(header.getContext()) || '';
    }
    return headerContent || '';
  } catch (error) {
    console.warn('Error rendering header:', error);
    return '';
  }
};

const handleHeaderClick = (header: any) => {
  if (!header || !header.column) return;
  
  try {
    const handler = header.column.getToggleSortingHandler();
    if (handler) {
      handler();
    }
  } catch (error) {
    console.warn('Error handling header click:', error);
  }
};
</script>

<template>
  <thead :class="classes.getClass('header')">
    <tr v-for="headerGroup in props.table?.getHeaderGroups?.() || []" :key="headerGroup?.id || Math.random()">
      <th
        v-for="header in headerGroup?.headers || []"
        :key="header?.id || Math.random()"
        :class="classes.getClass('headerCell')"
        :colspan="header?.colSpan || 1"
        :style="{ width: header?.getSize?.() || 'auto' }"
        @click="handleHeaderClick(header)"
      >
        <template v-if="header && header.column">
          <div v-if="!header.isPlaceholder" class="flex items-center">
            <span>{{ renderHeader(header) }}</span>
            <span :class="classes.getClass('sortIcon')" v-if="props.enableSorting">
              {{ getSortIcon(header.column) }}
            </span>
          </div>
        </template>
      </th>
    </tr>
  </thead>
</template> 