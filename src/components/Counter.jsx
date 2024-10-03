import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [victories, setVictories] = useState(0)
  const [defeats, setDefeats] = useState(0)

  const onAdd = (event, counter, setCounter) => {
    event.preventDefault()
    setCounter(counter + 1)
  }
  const onDelete = (event, counter, setCounter) => {
    event.preventDefault()
    if (counter > 0) setCounter(counter - 1)
  }
  return (
    <section className='counter'>
      <div className='counter-box'>
        <h3 className='counter-box-title'>{victories}</h3>
        <div className='counter-box-button blue'>
          <button onClick={() => onDelete(event, victories, setVictories)}>
            -
          </button>
          <h4>Wins</h4>
          <button onClick={() => onAdd(event, victories, setVictories)}>
            +
          </button>
        </div>
      </div>
      <div className='counter-box'>
        <h3 className='counter-box-title'>{defeats}</h3>
        <div className='counter-box-button red'>
          <button onClick={() => onDelete(event, defeats, setDefeats)}>
            -
          </button>
          <h4>Defeats</h4>
          <button onClick={() => onAdd(event, defeats, setDefeats)}>+</button>
        </div>
      </div>
    </section>
  )
}
export default Counter
