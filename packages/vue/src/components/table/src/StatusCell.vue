<script setup lang="ts">
interface Props {
  value: string;
}

defineProps<Props>();
</script>

<template>
  <span 
    :style="{ 
      color: value === 'Active' ? '#34C759' : value === 'Inactive' ? '#FF3B30' : '#FF9500',
      fontWeight: 'bold',
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: value === 'Active' ? '#E8F5E8' : value === 'Inactive' ? '#FFE8E8' : '#FFF3E0'
    }"
  >
    {{ value }}
  </span>
</template> 