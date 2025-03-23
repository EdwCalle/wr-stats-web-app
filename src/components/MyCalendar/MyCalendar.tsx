function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      return 'myClassName'
    }
  }
}
interface MyCalendarProps={
Matches=<Match></Match>[]
}
function MyCalendar() {
  <Calendar
    onChange={(value) => onChange(value)}
    value={currentDate}
    calendarType='gregory'
    minDate={new Date('01/01/2020')}
    maxDate={new Date()}
  />
}
export default MyCalendar
