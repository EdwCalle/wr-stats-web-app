import { Match } from '@/models/match.model'
import Counter from './Counter/Counter'
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
        handleClick={updateVictories}
        title='victories'
        type='victory'
      />
      <Counter
        type='defeat'
        counterValue={defeats}
        handleClick={updateDefeats}
        title='defeats'
      />
    </section>
  )
}
export default CounterBox
