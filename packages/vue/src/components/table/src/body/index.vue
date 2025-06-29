<script setup lang="ts">
import { h } from 'vue';
import { tableStyles } from 'packages/common/components/table/xStyles';
import { withStyleX } from '@packages/vue/hooks/with-stylex';

interface TableBodyProps {
  table: any;
}

const props = defineProps<TableBodyProps>();

const { classes } = withStyleX(tableStyles)({
  displayName: 'tableBody',
  rawProps: {}
});

const renderCell = (cell: any) => {
  if (!cell || !cell.column || !cell.column.columnDef) {
    return '';
  }
  
  try {
    const cellContent = cell.column.columnDef.cell;
    if (typeof cellContent === 'function') {
      const result = cellContent(cell.getContext());
      // If the result is a Vue component (has __vccOpts or similar), render it
      if (result && typeof result === 'object' && (result.__vccOpts || result.render || result.setup)) {
        return h(result);
      }
      // If it's a string (including HTML), return as is
      return result || '';
    }
    return cell.getValue() || '';
  } catch (error) {
    console.warn('Error rendering cell:', error);
    return '';
  }
};
</script>

<template>
  <tbody>
    <tr
      v-for="row in props.table?.getRowModel?.()?.rows || []"
      :key="row?.id || Math.random()"
      :class="classes.getClass('row')"
    >
      <td
        v-for="cell in row?.getVisibleCells?.() || []"
        :key="cell?.id || Math.random()"
        :class="classes.getClass('cell')"
      >
        <template v-if="cell && cell.column">
          <component :is="renderCell(cell)" v-if="renderCell(cell) && typeof renderCell(cell) === 'object'" />
          <span v-else-if="renderCell(cell) != null" v-html="renderCell(cell)"></span>
        </template>
      </td>
    </tr>
  </tbody>
</template> 