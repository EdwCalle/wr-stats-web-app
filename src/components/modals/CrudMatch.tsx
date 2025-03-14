import Modal from './Modal'
import Form from '../Form/Form'
import { useEffect, useState } from 'react'
import CounterBox from '../Counter/CounterBox'
import { Match } from '../../services/Match/match.model'

type CrudMatchProps = {
  match: Match
}

function CrudMatch({ match }: CrudMatchProps) {
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

  return (
    <Modal elementID={'crudMatch'}>
      <Form action='/home'>
        {/* <fieldset>
          <legend>Match info</legend>
          <h3>Season 14</h3>
          <span>12/12/2024</span>
        </fieldset> */}
        <fieldset>
          <legend>
            from date: <strong>{newMatch.date?.toISOString()}</strong>
          </legend>
          <h3>Season FILL</h3>
          <CounterBox updateMatch={onChangeCounter} match={newMatch} />
          {/* <Range isRangeForm={true} data={rankedTier}>
            <label>
              <select defaultValue={'DEFAULT'} name='tier'>
                <option value='DEFAULT' disabled>
                  Tier
                </option>
                {TIER.map((value, i) => (
                  <option key={i} value={i}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <select defaultValue={'DEFAULT'} name='division'>
                <option value='DEFAULT' disabled>
                  Division
                </option>
                {DIVISION.map((value, i) => (
                  <option key={i} value={i}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <input
                type='number'
                name='marks'
                placeholder='marks'
                value={rankedTier.marks}
              />
            </label>
          </Range> */}
          <button>Save Match</button>
        </fieldset>
      </Form>
    </Modal>
  )
}
export default CrudMatch
