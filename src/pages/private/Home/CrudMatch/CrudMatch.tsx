import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.models'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
import { useCrudMatch } from '@hooks/useCrudMatch'
type CrudMatchProps = {
  currentMatch: Match
  rankedTiers: RankedTier[]
  onSubmit: (match: Match) => void
}

function CrudMatch({ rankedTiers, currentMatch, onSubmit }: CrudMatchProps) {
  const { localMatch, onChangeCounter, onChangeRange, cancelCrudMatch } =
    useCrudMatch(currentMatch)

  return (
    <Modal
      elementID={'crudMatch'}
      title='CRUD match'
      onConfirm={() => onSubmit(localMatch)}
      onCancel={cancelCrudMatch}
    >
      <Form>
        <fieldset>
          <dl>
            <dt>season:</dt>
            <dd>{localMatch.seasonProfile.season.seasonName}</dd>
            <dt>date:</dt>
            <dd>{localMatch.date.toDateString()}</dd>
          </dl>

          <CounterBox updateMatch={onChangeCounter} match={localMatch} />
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
