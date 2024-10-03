import Counter from './Counter'
import './CounterBox.css'

function CounterBox({ data, updateMatch }) {
  const { victories, defeats } = data

  const updateVictories = (value) => {
    updateMatch(value, defeats)
  }
  const updateDefeats = (value) => {
    updateMatch(victories, value)
  }

  return (
    <section className='counter'>
      <Counter
        type='victory'
        value={victories}
        onChangeCounter={updateVictories}
        title='wins'
      />
      <Counter
        type='defeat'
        value={defeats}
        onChangeCounter={updateDefeats}
        title='defeats'
      />
    </section>
  )
}
export default CounterBox
