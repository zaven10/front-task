<template>
  <div :class="['inline-flex items-center justify-center rounded-full ring-2 ring-transparent transition-all group-hover:ring-[#906FEE] group-focus-within:ring-2 group-focus-within:ring-[#906FEE]', sizeClass]" :aria-hidden="!src">
    <img
      v-if="src"
      :src="src"
      :alt="alt || ''"
      :class="[
        'object-cover border-3 border-transparent',
        baseShape,
      ]"
      loading="lazy"
      decoding="async"
    />
    <div
      v-else
      :class="[
        'bg-gray-300 border-3 border-transparent',
        baseShape,
      ]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import {
  type IStudentCardThumbnailProps,
  defaultProps,
  useStudentCardThumbnailComponent,
} from './index.script'

defineOptions({ name: 'StudentCardThumbnail' })

const props = withDefaults(defineProps<IStudentCardThumbnailProps>(), defaultProps)

const { baseShape } = useStudentCardThumbnailComponent(props)
</script>
