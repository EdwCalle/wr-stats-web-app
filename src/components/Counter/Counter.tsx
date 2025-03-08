type CounterProps = {
  counterValue: number
  onChangeCounter: (value: number) => void
  type: string
  title: string
}
function Counter({
  counterValue,
  onChangeCounter,
  type = 'victory',
  title,
}: CounterProps) {
  const CounterType = type === 'victory' ? 'blue' : 'red'

  const onAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    // setCounter(counter + 1)
    onChangeCounter(counterValue + 1)
  }
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (counterValue > 0) {
      onChangeCounter(counterValue - 1)
    }
  }
  return (
    <div className='counter-box'>
      <h3 className='counter-box-title'>{counterValue}</h3>
      <div className={`counter-box-button ${CounterType}`}>
        <button onClick={onDelete}>-</button>
        <h4>{title}</h4>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  )
}
export default Counter
