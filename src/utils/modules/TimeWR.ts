import { DateTime } from 'luxon'

//TO DO IMPORTANT
//add securty in nosql injection and others securities options (backend)

/**
 * Converts a Date object to a "YYYY-MM-DD" string format.
 *
 * @param {Date} date The Date object to convert.
 * @returns {string} A string representing the date in "YYYY-MM-DD" format.
 * @example
 * const myDate = new Date('2023-10-26T12:00:00Z');
 * const dateString = toWRDateString(myDate); // dateString will be "2023-10-26"
 
 */
export const toWRDateString = (date: Date): string => {
  return DateTime.fromJSDate(date).toFormat('yyyy-MM-dd')
}
/**
 * Converts a ISO string Date from API to local date
 * 
 * IMPORTANT: this is used for casting all API dates to localDate, if this is not used, can cause conflics with API dates and local dates 
 * 
 * @param {String} isoDate The ISO string Date  to convert.
 * @returns {Date} A ISO string Date converted to local date with time 00:00.
 * @example
 * const isoDate = '2023-10-26T00:00:00Z';
 * const localDate = toLocalDate(isoDate);
 
 */
export const toLocalDate = (isoDate: string): Date => {
  const date = new Date(isoDate)
  // const offset = date.getTimezoneOffset()
  // date.setMinutes(offset)
  date.setHours(0, 0, 0, 0)
  return date
}

export const toApiDate = (date: Date) => {
  date.setHours(0, 0, 0, 0)
  return date
}
export const toApiDateString = (date: Date) => {
  const newDate = toApiDate(date)
  return newDate.toISOString()
}
export const newDate = () => {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}
export const compareDate = (date1: Date, date2: Date) => {
  const client = DateTime.fromJSDate(date1).toLocal()
  const server = DateTime.fromJSDate(date2).toLocal()
  return (
    client.year === server.year &&
    client.month === server.month &&
    client.day === server.day
  )
}

// export function delay(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }
