import { useCrudMatch } from '@/context/CrudMatchContext'
import { useMatch } from '@/context/MatchContext'
import { RankedTier } from '@/models/rankedTier.models'
import CounterBox from '@components/CounterBox/CounterBox'
import Form from '@components/Form/Form'
import Modal from '@components/Modal/Modal'
import RangeInput from '@components/RangeInput/RangeInput'
type CrudMatchProps = {
  rankedTiers: RankedTier[]
}

function CrudMatch({ rankedTiers }: CrudMatchProps) {
  const { localMatch, onChangeCounter, onChangeRange, cancelCrudMatch } =
    useCrudMatch()
  const { createMatch } = useMatch()

  const onSubmit = async () => {
    console.log('sending new match:', localMatch)
    createMatch(localMatch)
  }

  return (
    <Modal
      elementID={'crudMatch'}
      title='CRUD match'
      onConfirm={onSubmit}
      onCancel={cancelCrudMatch}
    >
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
