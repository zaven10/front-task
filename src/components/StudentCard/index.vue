<template>
  <div
    class="flex items-center gap-3 group hover:cursor-pointer border border-[#b8b2c8] p-3 rounded-xl hover:border-[#906FEE] focus-within:border-[#906FEE] transition-all"
  >
    <student-card-thumbnail :src="image" :alt="name" />
    <div class="grid gap-2">
      <label class="block font-semibold transition-all group-focus-within:text-[#906FEE] group-hover:text-[#906FEE]">{{ name }} is</label>
      <number-input v-model="age">
        <template #append>
          <span class="text">hours old</span>
        </template>
      </number-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import NumberInput from '@/components/NumberInput/index.vue'
import StudentCardThumbnail from '@/components/StudentCardThumbnail/index.vue'

import type { IStudentCardProps } from './index.script'

defineOptions({ name: 'StudentCard' })

defineProps<IStudentCardProps>()

const age = defineModel<number | null>('age', { default: null })
</script>
