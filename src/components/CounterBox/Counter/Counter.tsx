type CounterProps = {
  counterValue: number
  handleClick: (value: number) => void
  type: string
  title: string
}
function Counter({
  counterValue,
  handleClick: onChangeCounter,
  type = 'victory',
  title,
}: CounterProps) {
  const CounterType = type === 'victory' ? 'blue' : 'red'

  const onAdd = () => {
    onChangeCounter(counterValue + 1)
  }
  const onDelete = () => {
    if (counterValue > 0) {
      onChangeCounter(counterValue - 1)
    }
  }
  return (
    <div className='counter-box'>
      <h3 className='counter-box-title'>{counterValue}</h3>
      <div className={`counter-box-button ${CounterType}`}>
        <button type='button' onClick={onDelete}>
          -
        </button>
        <h4>{title}</h4>
        <button type='button' onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  )
}
export default Counter
