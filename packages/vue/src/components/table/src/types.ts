import type { FCWithStylesProps } from '@packages/vue/types';
import type { ColumnDef, RowData } from '@tanstack/vue-table';

export interface TableProps<Styles> extends FCWithStylesProps<Styles> {
  data?: RowData[];
  columns?: ColumnDef<any, any>[];
  enableSorting?: boolean;
  enablePagination?: boolean;
  enableColumnFilters?: boolean;
  enableRowSelection?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
}