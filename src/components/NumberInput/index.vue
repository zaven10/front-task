<template>
  <div class="flex gap-2 items-center">
    <div class="relative">
      <input
        v-model="modelString"
        :style="{ width: widthPx }"
        name="hours-old"
        id="hours-old"
        class="border-gray-300 border bg-transparent outline-none min-w-[72px] rounded p-1.5 focus:border-[#906FEE] hover:border-[#906FEE] transition-all text-sm"
        type="text"
        @keydown="onKeyDownHandler"
      />
      <span
        ref="measureEl"
        aria-hidden="true"
        class="absolute opacity-0 -z-10 pointer-events-none whitespace-pre"
        v-text="mirrorText"
      />
    </div>
    <div>
      <slot name="append" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNumberInputComponent } from './index.script'

const model = defineModel<number | null>({ default: null })

defineOptions({ name: 'NumberInput' })

const { mirrorText, widthPx, onKeyDownHandler, modelString, measureEl } =
  useNumberInputComponent(model)
</script>
