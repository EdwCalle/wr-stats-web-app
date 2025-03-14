import { Match } from '../../services/Match/match.model'
import Counter from './Counter'
import './CounterBox.css'

type CounterBoxProps = {
  match: Match
  updateMatch: (victories: number, defeats: number) => void
}

function CounterBox({ match, updateMatch }: CounterBoxProps) {
  const { victories, defeats } = match

  const updateVictories = (value: number) => {
    updateMatch(value, defeats)
  }
  const updateDefeats = (value: number) => {
    updateMatch(victories, value)
  }

  return (
    <section className='counter'>
      <Counter
        counterValue={victories}
        onChangeCounter={updateVictories}
        title='victories'
        type='victory'
      />
      <Counter
        type='defeat'
        counterValue={defeats}
        onChangeCounter={updateDefeats}
        title='defeats'
      />
    </section>
  )
}
export default CounterBox
