import { Match } from '@/models/match.model'
import CounterBox from '@components/CounterBox/CounterBox'
import RangeInfo, { RangeType } from '@components/RangeInfo/RangeInfo'
import RangeInput from '@components/RangeInput/RangeInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { matchSchema, MatchValues } from '@utils/validations/match-schema'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from '../Form/Form'
import Modal from './Modal'

type CrudMatchProps = {
  match: Match
}

function CrudMatch({ match }: CrudMatchProps) {
  const {
    control,
    handleSubmit,
    // watch,
  } = useForm<MatchValues>({
    resolver: zodResolver(matchSchema),
  })
  const [newMatch, setnewMatch] = useState(match)
  useEffect(() => {
    setnewMatch(match)
  }, [match])
  // const newMatch = data
  // const rankedTier = getRange(data)
  const onChangeCounter = (victories: number, defeats: number) => {
    const match = { ...newMatch }
    match.victories = victories
    match.defeats = defeats
    setnewMatch(match)
    console.log(match)
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
          <h3>{newMatch.seasonProfile.season.seasonName}</h3>
          <h3>
            from date: <strong>{newMatch.date.toDateString()}</strong>
          </h3>
        </fieldset>
        <fieldset>
          <legend>form...</legend>
          <RangeInfo type={RangeType.info} range={newMatch.range} />
          <CounterBox updateMatch={onChangeCounter} match={newMatch} />
          <RangeInput range={match.range} control={control} />
          <button>Save Match</button>
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
