export const formatWithSpaces = (digits: string): string => {
  if (!digits) {
    return ''
  }

  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
