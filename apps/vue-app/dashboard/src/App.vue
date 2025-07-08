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
import ThemeProvider from 'packages/vue/src/system/theme-provider/src/index.vue';
import Button from 'packages/vue/src/components/button/src/index.vue';
import Select from 'packages/vue/src/components/select/src/index.vue';
import Form, { type FormItem } from 'packages/vue/src/components/form/src/index.vue';
import Box from 'packages/vue/src/components/box/src/index.vue';

import { getTheme } from 'packages/common/theme';
import { themeConfig } from './theme/config';

const { theme, themeTokens } = getTheme();

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
  <ThemeProvider :theme="theme" :theme-config="themeConfig" :theme-tokens="themeTokens">
    <!-- Box Component Examples -->
    <Box padding="lg" margin="md" background="background" border-radius="md">
      <h2>Box Component Demo</h2>
      <p>This is a basic box with padding, margin, background, and border radius.</p>
    </Box>

    <Box display="flex" justify-content="between" align-items="center" padding="md" background="primary" border-radius="sm">
      <span>Flex Box Layout</span>
      <Button>Action</Button>
    </Box>

    <Box display="grid" padding="lg">
      <Box as="section" padding="sm" background="secondary" border-radius="md" margin="xs">
        <h3>Grid Item 1</h3>
        <p>Custom element (section) with styling</p>
      </Box>
      <Box padding="sm" background="background" border-radius="md" margin="xs">
        <h3>Grid Item 2</h3>
        <p>Default div element</p>
      </Box>
    </Box>

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