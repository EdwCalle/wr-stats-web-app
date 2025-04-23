import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import { Season } from '@/models/season.model'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
import Select from '@components/Select/Select'
import { useCrudMatch } from '@hooks/useCrudMatch'
import { toWRDateString } from '@utils/modules/TimeWR'
import Menu from './Menu/Menu'
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
    onDeleteMatch,
    onCopyMatch,
    onConfirm,
    onCancel,
    isLoading,
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
      onCancel={onCancel}
      isLoading={isLoading}
    >
      <Form>
        <fieldset>
          <legend>
            {toWRDateString(localMatch.date)}
            {localMatch._id && (
              <Menu onDelete={onDeleteMatch} onCopy={onCopyMatch} />
            )}
          </legend>

          <Select
            name='seasons'
            label='select season'
            onSelectedOption={onChangeSeason}
            options={seasonOptions}
            selectedOption={selectedSeason}
            disabled={localMatch._id ? true : false}
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
