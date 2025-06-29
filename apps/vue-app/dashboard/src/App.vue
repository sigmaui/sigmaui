<script lang="ts">

// import * as stylex from '@stylexjs/stylex';

// const components = stylex.create({
//   root: {
//     color: 'red',
//     fontSize: '18px',
//     fontWeight: 'bold'
//   }
// });

</script>

<script setup lang="ts">
import ThemeProvider from 'packages/vue/src/system/theme-provider.vue';
import Button from 'packages/vue/src/components/button/src/index.vue';
import Select from 'packages/vue/src/components/select/src/index.vue';
import Form, { type FormItem } from 'packages/vue/src/components/form/src/index.vue';

import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

const { theme, themeVariant } = getTheme();

const items: FormItem[] = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter your first name',
    type: 'text'
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter your last name',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email address',
    // type: 'email'
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password'
  }
]

const handleFormSubmit = (formData: any) => {
  console.log('Form submitted with data:', formData);
  // alert('Form submitted successfully!');
}
</script>

<template>
  <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-variant="themeVariant">
    <Button>Button</Button>
    <ThemeProvider>
      <Button size="lg">Button</Button>
      <Select>Select</Select>
      <Form
          :items="items"
          @submit="handleFormSubmit"
      />
    </ThemeProvider>
  </ThemeProvider>
</template>