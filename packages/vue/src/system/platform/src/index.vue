<template>
  <slot/>
</template>

<script lang="ts">
import { PlatformProvider, usePlatform } from '@sigmaui-kit/v-use-platform';
import { usePlatformDetect } from '@sigmaui-kit/use-platform-detect';

export {
  usePlatform,
  usePlatformDetect
}
</script>

<script setup lang="ts">

interface PlatformProviderProps {
  userAgent?: string
}

const props = defineProps<PlatformProviderProps>();

const { platform } = usePlatformDetect(props?.userAgent);

PlatformProvider({
  platform
})
</script>