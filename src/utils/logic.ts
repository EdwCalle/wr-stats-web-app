//TO DO IMPORTANT
//add securty in nosql injection and others securities options (backend)
export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toISOString().substring(0, 10)
}
export const toLocalDate = (isoDate: string): Date => {
  const date = new Date(isoDate)
  date.setHours(0)
  return date
}
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getTableHeaders(params: object) {
  return Object.keys(params)
}
