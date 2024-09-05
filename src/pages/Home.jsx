import CardDetails from '../components/cardDetails'
import CardCalendar from '../components/CardCalendar'
import CrudMatch from '../components/modals/CrudMatch'
import PageContent from '../components/PageContent'
import { handleShowModal } from '../logic'

function Home() {
  return (
    <PageContent title='HOME'>
      <CrudMatch />
      <CardCalendar />
      <CardDetails showCrudMatch={() => handleShowModal('crudMatch')} />
    </PageContent>
  )
}
export default Home
