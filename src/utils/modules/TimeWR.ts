//TO DO IMPORTANT
//add securty in nosql injection and others securities options (backend)
export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate)
  return date.toISOString().substring(0, 10)
}
export const toLocalDate = (isoDate: string): Date => {
  const date = new Date(isoDate)
  const offset = date.getTimezoneOffset()
  date.setMinutes(offset)
  return date
}
export const toApiDate = (date: Date) => {
  // const offset = date.getTimezoneOffset()
  // date.setMinutes(-offset)
  return date
}
export const newDate = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}
export const compareDate = (date1: Date, date2: Date) => {
  return date1.toISOString() === date2.toISOString()
}
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
