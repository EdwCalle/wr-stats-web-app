import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import { Season } from '@/models/season.model'
import ButtonIcon from '@components/ButtonIcon/ButtonIcon'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
import Select from '@components/Select/Select'
import { useCrudMatch } from '@hooks/useCrudMatch'
import { CiTrash } from 'react-icons/ci'
type CrudMatchProps = {
  currentMatch: Match
  rankedTiers: RankedTier[]
  seasons: Season[]
  onSubmitted: (date: Date) => Promise<void>
}

function CrudMatch({
  rankedTiers,
  seasons,
  currentMatch,
  onSubmitted,
}: CrudMatchProps) {
  const {
    localMatch,
    onChangeSeason,
    onChangeCounter,
    onChangeRange,
    onConfirm,
    onDeleteMatch,
    cancelCrudMatch,
  } = useCrudMatch({ currentMatch, onSubmitted })
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
      onConfirm={onConfirm}
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
          {localMatch._id && (
            <ButtonIcon
              onClick={() => {
                onDeleteMatch(localMatch._id, localMatch.date)
              }}
            >
              <CiTrash size={28} />
            </ButtonIcon>
          )}
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
