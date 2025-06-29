<script lang="ts">
import { formStyles, FormTypes } from 'packages/common/components/form/xStyles';
import type { FormItem } from './types';

const prefixCls = 'sm-form';

export type {
  FormItem
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx';
import { useForm } from '@tanstack/vue-form';
import { withStyleX } from '@packages/vue/hooks/with-stylex';
import type { FormProps } from './types';
import FormField from './FormField.vue';

const rawProps = defineProps<FormProps<FormTypes>>();

console.log('rawProps', rawProps)

const { classes, props } = withStyleX(formStyles)({
  displayName: 'form',
  rawProps
});

const {
  className,
  styles = {},
  items = [],
  submitText = 'Submit'
} = props;

const form = useForm({
  defaultValues: {},
  onSubmit: async ({ value }) => {
    console.log('Form submitted:', value);
  }
});

const handleSubmit = (event: Event) => {
  event.preventDefault();
  event.stopPropagation();

  form.handleSubmit();
}

const isAction = true;
</script>

<template>
  <form
      :class="clsx(prefixCls, className, classes.getClass('root', styles.root))"
      @submit="handleSubmit"
  >
    <div
        :class="clsx(`${prefixCls}-field`, classes.getClass('field', styles.field))"
        :key="index"
        v-for="(item, index) in items"
    >
      <FormField :prefixCls="prefixCls + 'field'" :item="item" :classes="classes" :form="form"/>
    </div>
    <component :is="form.Subscribe" v-if="isAction">
      <template v-slot="{ canSubmit, isSubmitting }">
        <div :class="clsx(`${prefixCls}-actions`)">
          <button
              type="submit"
              :class="classes.getClass('submit')"
              :disabled="!canSubmit"
          >
            {{ isSubmitting ? 'Submitting...' : submitText }}
          </button>
        </div>
      </template>
    </component>
  </form>
</template>