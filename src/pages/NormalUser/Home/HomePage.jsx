import Main from '@/components/Layout/Main'
import CrudMatch from '@/components/modals/CrudMatch'
import CardCalendar from './components/CardCalendar/CardCalendar'
import CardDetails from './components/CardDetails/CardDetails'
import { handleShowModal } from '@/logic'

function HomePage() {
  return (
    <Main title='HOME'>
      <CrudMatch />
      <CardCalendar />
      <CardDetails showCrudMatch={() => handleShowModal('crudMatch')} />
    </Main>
  )
}
export default HomePage
