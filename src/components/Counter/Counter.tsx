function Counter({ value, onChangeCounter, type = 'victory', title }) {
  const CounterType = type === 'victory' ? 'blue' : 'red'

  const onAdd = (event) => {
    event.preventDefault()

    // setCounter(counter + 1)
    onChangeCounter(value + 1)
  }
  const onDelete = (event) => {
    event.preventDefault()
    if (value > 0) {
      onChangeCounter(value - 1)
    }
  }
  return (
    <div className='counter-box'>
      <h3 className='counter-box-title'>{value}</h3>
      <div className={`counter-box-button ${CounterType}`}>
        <button onClick={onDelete}>-</button>
        <h4>{title}</h4>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  )
}
export default Counter
