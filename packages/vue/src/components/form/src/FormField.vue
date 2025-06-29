<script setup lang="ts">
import type { FormFieldProps } from './types';

const props = defineProps<FormFieldProps>();

const { form } = props;
</script>

<template>
  <component
      :is="form.Field"
      :name="item.name"
      :validators="{
        onChange: ({ value }) => {},
        onChangeAsyncDebounceMs: 500,
        onChangeAsync: () => {}
      }"
  >
    <template v-slot="{ field, state }">
      <label :htmlFor="field.name" :class="classes.getClass('label')">{{ item.label || item.name }}:</label>
      <input
          :id="field.name"
          :name="field.name"
          :value="field.state.value"
          :placeholder="item.placeholder"
          :type="item.type || 'text'"
          :class="classes.getClass('input')"
          @input="(e) => field.handleChange((e.target as HTMLInputElement).value)"
          @blur="field.handleBlur"
      />
      <div v-if="state.meta.errors.length > 0" :class="classes.getClass('error')">
        {{ state.meta.errors[0] }}
      </div>
    </template>
  </component>
</template> 