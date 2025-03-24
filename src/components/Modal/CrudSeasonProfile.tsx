import { Season } from '@/models/season.model'
import Form from '@components/Form/Form'
import Select from '@components/Select/Select'
import { useForm } from 'react-hook-form'
import Modal from './Modal'

interface CrudSeasonProfileProps {
  seasons: Season[]
}
function CrudSeasonProfile({ seasons }: CrudSeasonProfileProps) {
  const { handleSubmit } = useForm()
  const options = seasons.map((season) => ({
    id: season._id,
    value: season.seasonName,
  }))
  const onSelectedOption = (seasonID: string) => {
    console.log(seasonID)
  }
  const onSubmit = handleSubmit(() => {})
  return (
    <>
      <Modal elementID='crudSeasonProfile' title='Create Season Profile'>
        <Form onSubmit={onSubmit}>
          <fieldset>
            <legend></legend>
            <Select
              name='seasons'
              selectedOption={options[0]}
              options={options}
              onSelectedOption={onSelectedOption}
            />
          </fieldset>
        </Form>
      </Modal>
    </>
  )
}
export default CrudSeasonProfile
