import { Match, Ranged } from '@/models/match.model'
import CounterBox from '@components/CounterBox/CounterBox'
import RangeInfo, { RangeType } from '@components/RangeInfo/RangeInfo'
import RangeInput from '@components/RangeInput/RangeInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { matchSchema, MatchValues } from '@utils/validations/match-schema'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../Form/Form'
import Modal from './Modal'

type CrudMatchProps = {
  currentMatch: Match
  options: Array<{ id: string; value: string }>
}

function CrudMatch({ currentMatch, options }: CrudMatchProps) {
  const {
    control,
    handleSubmit,
    // watch,
  } = useForm<MatchValues>({
    resolver: zodResolver(matchSchema),
  })
  const [localMatch, setLocalMatch] = useState(currentMatch)
  const onChangeCounter = (victories: number, defeats: number) => {
    const match = { ...localMatch }
    match.victories = victories
    match.defeats = defeats
    setLocalMatch(match)
  }
  const onChangeRange = (range: Ranged) => {
    const match = { ...localMatch }
    match.range = range
    setLocalMatch(match)
  }
  const onSubmit = handleSubmit(() => {
    console.log('sending new match')
  })
  return (
    <Modal elementID={'crudMatch'}>
      <Form onSubmit={onSubmit}>
        {/* TO DO 
        use dt elements
        */}
        <fieldset>
          <legend>Match info</legend>
          <h3>{localMatch.seasonProfile.season.seasonName}</h3>
          <h3>
            from date: <strong>{localMatch.date.toDateString()}</strong>
          </h3>
        </fieldset>
        <fieldset>
          <legend>form...</legend>
          <RangeInfo type={RangeType.info} range={localMatch.range} />
          <CounterBox updateMatch={onChangeCounter} match={localMatch} />
          <RangeInput
            range={localMatch.range}
            control={control}
            options={options}
            onChangeRangeInput={onChangeRange}
          />
          <button>Save Match</button>
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
