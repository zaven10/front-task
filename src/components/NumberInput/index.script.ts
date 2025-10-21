import { computed, onMounted, nextTick, ref, watch, type ModelRef } from 'vue'

import { $formatWithSpaces } from '@/utils'

export const useNumberInputComponent = (model: ModelRef<number | null>) => {
  const modelString = computed<string>({
    get: () => (model.value ? $formatWithSpaces(String(model.value)) : ''),
    set: (val: string) => {
      const digits = val.replace(/\D+/g, '')

      model.value = digits.length ? Number(digits) : null
    },
  })

  const MIN_WIDTH = 72
  const BUFFER = 6

  const width = ref<number>(MIN_WIDTH)
  const measureEl = ref<HTMLElement | null>(null)

  const mirrorText = computed(() => (modelString.value?.length ? modelString.value : '0'))

  const widthPx = computed(() => `${width.value}px`)

  const updateWidth = async () => {
    await nextTick()

    const measured = measureEl.value?.offsetWidth ?? 0

    width.value = Math.max(MIN_WIDTH, measured + BUFFER)
  }

  onMounted(updateWidth)

  watch(modelString, updateWidth)

  const onKeyDownHandler = (e: KeyboardEvent) => {
    const allowedControlKeys = new Set([
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Home',
      'End',
    ])

    if ((e.ctrlKey || e.metaKey) && /^[acvxyz]$/i.test(e.key)) {
      return
    }

    if (allowedControlKeys.has(e.key)) {
      return
    }

    if (/^\d$/.test(e.key)) {
      return
    }

    e.preventDefault()
  }

  return {
    mirrorText,
    widthPx,
    onKeyDownHandler,
    modelString,
    measureEl,
  }
}
