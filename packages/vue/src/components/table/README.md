# Table Component

A powerful and flexible table component built with Vue 3 and @tanstack/vue-table.

## Features

- ✅ Sorting (single and multi-column)
- ✅ Pagination
- ✅ Column filtering
- ✅ Row selection
- ✅ Responsive design
- ✅ Customizable styling with StyleX
- ✅ TypeScript support
- ✅ Custom cell components

## Installation

The table component is part of the SigmaUI Vue package and uses @tanstack/vue-table under the hood.

```bash
npm install @sigmaui-kit/vue @tanstack/vue-table
```

## Basic Usage

```vue
<template>
  <Table 
    :data="data" 
    :columns="columns"
    :enable-sorting="true"
    :enable-pagination="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Table } from '@sigmaui-kit/vue';
import type { ColumnDef } from '@tanstack/vue-table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const data = ref<User[]>([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]);

const columns = ref<ColumnDef<User>[]>([
  { accessorKey: 'id', header: 'ID', size: 60 },
  { accessorKey: 'name', header: 'Name', size: 200 },
  { accessorKey: 'email', header: 'Email', size: 250 },
  { accessorKey: 'role', header: 'Role', size: 120 },
]);
</script>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `RowData[]` | `[]` | Array of data to display in the table |
| `columns` | `ColumnDef<any, any>[]` | `[]` | Column definitions for the table |
| `enableSorting` | `boolean` | `true` | Enable column sorting |
| `enablePagination` | `boolean` | `true` | Enable pagination |
| `enableColumnFilters` | `boolean` | `false` | Enable column filtering |
| `enableRowSelection` | `boolean` | `false` | Enable row selection |
| `pageSize` | `number` | `10` | Number of rows per page |
| `pageSizeOptions` | `number[]` | `[5, 10, 20, 50]` | Available page size options |

## Column Definition

Columns are defined using the @tanstack/vue-table `ColumnDef` interface:

```typescript
interface ColumnDef<TData, TValue> {
  accessorKey?: keyof TData;
  header?: string | (() => string);
  cell?: (info: CellContext<TData, TValue>) => any;
  size?: number;
  sortable?: boolean;
  // ... other options
}
```

### Example with Custom Cell Component

```vue
<script setup lang="ts">
import { ref, h } from 'vue';
import type { ColumnDef } from '@tanstack/vue-table';

// Custom cell component
const StatusCell = {
  props: ['value'],
  template: `
    <span :style="{ 
      color: value === 'active' ? 'green' : 'red', 
      fontWeight: 'bold' 
    }">
      {{ value }}
    </span>
  `
};

const columns = ref<ColumnDef<User>[]>([
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => h(StatusCell, { value: getValue() })
  }
]);
</script>
```

### Example with HTML String

```typescript
const columns = ref<ColumnDef<User>[]>([
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue() as string;
      const color = status === 'active' ? 'green' : 'red';
      return `<span style="color: ${color}; font-weight: bold;">${status}</span>`;
    }
  }
]);
```

## Styling

The table component uses StyleX for styling. You can customize the appearance by passing style overrides:

```vue
<template>
  <Table 
    :data="data" 
    :columns="columns"
    :styles="{
      header: { backgroundColor: '#f0f0f0' },
      row: { ':hover': { backgroundColor: '#f5f5f5' } }
    }"
  />
</template>
```

## Advanced Features

### Row Selection

```vue
<template>
  <Table 
    :data="data" 
    :columns="columns"
    :enable-row-selection="true"
    @row-selection-change="handleSelectionChange"
  />
</template>

<script setup lang="ts">
const handleSelectionChange = (selection: any) => {
  console.log('Selected rows:', selection);
};
</script>
```

### Custom Pagination

```vue
<template>
  <Table 
    :data="data" 
    :columns="columns"
    :enable-pagination="true"
    :page-size="20"
    :page-size-options="[10, 20, 50, 100]"
  />
</template>
```

## Examples

See the `example.ts` file in the component directory for more detailed examples of how to use the table component with different data typesStylex and configurations.

## Dependencies

- Vue 3.x
- @tanstack/vue-table
- @stylexjs/stylex (for styling)

## License

MIT 