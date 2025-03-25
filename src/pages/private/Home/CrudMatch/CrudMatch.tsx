import { Match } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.models'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
import useCrudMatch from '@hooks/useCrudMatch'
type CrudMatchProps = {
  currentMatch: Match | undefined
  rankedTiers: RankedTier[]
}

function CrudMatch({ currentMatch, rankedTiers }: CrudMatchProps) {
  const { localMatch, onChangeCounter, onChangeRange } =
    useCrudMatch(currentMatch)

  const onSubmit = () => {
    console.log('sending new match:', localMatch)
  }
  return (
    <Modal elementID={'crudMatch'} title='CRUD match' onConfirm={onSubmit}>
      <Form>
        <fieldset>
          <dl>
            <dt>season:</dt>
            <dd>{localMatch.seasonProfile.season.seasonName}</dd>
            <dt>date:</dt>
            <dd>{localMatch.date.toLocaleDateString()}</dd>
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
