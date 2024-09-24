import Main from '@/components/Layout/Main'
import CrudMatch from '@/components/modals/CrudMatch'
import CardCalendar from './components/CardCalendar/CardCalendar'
import CardDetails from './components/CardDetails/CardDetails'
import { handleShowModal } from '@/logic'
import { exampleData } from '@/dataWR'

function HomePage() {
  const random = Math.floor(Math.random() * 700)
  console.log(random)
  return (
    <Main title='HOME'>
      <CrudMatch />
      <CardCalendar data={exampleData[random]} />
      <CardDetails data={exampleData[random]} />
    </Main>
  )
}
export default HomePage
