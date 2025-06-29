<script setup lang="ts">
import { computed } from 'vue';
import { tableStyles } from 'packages/common/components/table/xStyles';
import { withStyleX } from '@packages/vue/hooks/with-stylex';

interface TablePaginationProps {
  table: any;
  pageSizeOptions?: number[];
}

const props = withDefaults(defineProps<TablePaginationProps>(), {
  pageSizeOptions: () => [5, 10, 20, 50]
});

const { classes } = withStyleX(tableStyles)({
  displayName: 'tablePagination',
  rawProps: {}
});

const pageCount = computed(() => {
  try {
    return props.table?.getPageCount?.() || 0;
  } catch (error) {
    console.warn('Error getting page count:', error);
    return 0;
  }
});

const currentPage = computed(() => {
  try {
    return props.table?.getState?.()?.pagination?.pageIndex || 0;
  } catch (error) {
    console.warn('Error getting current page:', error);
    return 0;
  }
});

const pageSizeValue = computed(() => {
  try {
    return props.table?.getState?.()?.pagination?.pageSize || 10;
  } catch (error) {
    console.warn('Error getting page size:', error);
    return 10;
  }
});

const filteredRowsLength = computed(() => {
  try {
    return props.table?.getFilteredRowModel?.()?.rows?.length || 0;
  } catch (error) {
    console.warn('Error getting filtered rows length:', error);
    return 0;
  }
});

const canPreviousPage = computed(() => {
  try {
    return props.table?.getCanPreviousPage?.() || false;
  } catch (error) {
    console.warn('Error checking can previous page:', error);
    return false;
  }
});

const canNextPage = computed(() => {
  try {
    return props.table?.getCanNextPage?.() || false;
  } catch (error) {
    console.warn('Error checking can next page:', error);
    return false;
  }
});

const goToPage = (page: number) => {
  try {
    if (props.table?.setPageIndex) {
      props.table.setPageIndex(page);
    }
  } catch (error) {
    console.warn('Error going to page:', error);
  }
};

const setPageSize = (size: number) => {
  try {
    if (props.table?.setPageSize) {
      props.table.setPageSize(size);
    }
  } catch (error) {
    console.warn('Error setting page size:', error);
  }
};

const getPaginationInfo = computed(() => {
  try {
    const start = currentPage.value * pageSizeValue.value + 1;
    const end = Math.min((currentPage.value + 1) * pageSizeValue.value, filteredRowsLength.value);
    return `Showing ${start} to ${end} of ${filteredRowsLength.value} results`;
  } catch (error) {
    console.warn('Error calculating pagination info:', error);
    return 'Showing 0 to 0 of 0 results';
  }
});
</script>

<template>
  <div :class="classes.getClass('pagination')">
    <div :class="classes.getClass('paginationInfo')">
      {{ getPaginationInfo }}
    </div>
    
    <div :class="classes.getClass('paginationControls')">
      <button
        :class="classes.getClass('paginationButton')"
        :disabled="!canPreviousPage"
        @click="goToPage(0)"
      >
        &laquo;
      </button>
      <button
        :class="classes.getClass('paginationButton')"
        :disabled="!canPreviousPage"
        @click="goToPage(currentPage - 1)"
      >
        &lsaquo;
      </button>
      <button
        :class="classes.getClass('paginationButton')"
        :disabled="!canNextPage"
        @click="goToPage(currentPage + 1)"
      >
        &rsaquo;
      </button>
      <button
        :class="classes.getClass('paginationButton')"
        :disabled="!canNextPage"
        @click="goToPage(pageCount - 1)"
      >
        &raquo;
      </button>
      
      <select
        :value="pageSizeValue"
        @change="setPageSize(Number($event.target.value))"
        :class="classes.getClass('paginationButton')"
      >
        <option v-for="size in props.pageSizeOptions" :key="size" :value="size">
          Show {{ size }}
        </option>
      </select>
    </div>
  </div>
</template> 