import { computed } from 'vue'

export interface IStudentCardThumbnailProps {
  src?: string | null
  alt?: string
  sizeClass?: string
  rounded?: boolean
}

export const defaultProps: IStudentCardThumbnailProps = {
  src: null,
  alt: '',
  sizeClass: 'w-20 h-20',
  rounded: true,
}

export const useStudentCardThumbnailComponent = ({
  rounded,
  sizeClass,
}: IStudentCardThumbnailProps) => {
  const roundClass = computed(() => (rounded ? 'rounded-full' : 'rounded'))

  const baseShape = computed(() => `${sizeClass} ${roundClass.value}`)

  return {
    baseShape,
  }
}
