import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import { Season } from '@/models/season.model'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
import Select from '@components/Select/Select'
import { useCrudMatch } from '@hooks/useCrudMatch'
type CrudMatchProps = {
  currentMatch: Match
  rankedTiers: RankedTier[]
  seasons: Season[]
  onSubmit: (match: Match) => void
}

function CrudMatch({
  rankedTiers,
  seasons,
  currentMatch,
  onSubmit,
}: CrudMatchProps) {
  const {
    localMatch,
    onChangeSeason,
    onChangeCounter,
    onChangeRange,
    cancelCrudMatch,
  } = useCrudMatch(currentMatch)
  const seasonOptions = seasons.map(({ _id, seasonName }) => ({
    id: _id,
    value: seasonName,
  }))
  const selectedSeason = {
    id: localMatch.seasonProfile.season._id,
    value: localMatch.seasonProfile.season.seasonName,
  }
  return (
    <Modal
      elementID={'crudMatch'}
      title='CRUD match'
      onConfirm={() => onSubmit(localMatch)}
      onCancel={cancelCrudMatch}
    >
      <Form>
        <fieldset>
          <legend>{localMatch.date.toDateString()}</legend>
          <Select
            name='seasons'
            label='select season'
            onSelectedOption={onChangeSeason}
            options={seasonOptions}
            selectedOption={selectedSeason}
          />
          <CounterBox
            updateMatch={onChangeCounter}
            victories={localMatch.victories}
            defeats={localMatch.defeats}
          />
          <RangeInput
            range={localMatch.range}
            rankedTiers={rankedTiers}
            onChangeRangeInput={onChangeRange}
          />
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
