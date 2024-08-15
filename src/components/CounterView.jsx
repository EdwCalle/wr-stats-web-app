import './../css/CounterView.css'
function CounterView() {
  return (
    <>
      <div className='card-counterView'>
        <div className='card-counterView-cell'>
          <p className='card-counterView-cellValue'>-100</p>
          <p className='card-counterView-cellTitle victories'>Victories</p>
        </div>
        <div className='card-counterView-cellDivider'></div>
        <div className='card-counterView-cell defeats'>
          <p className='card-counterView-cellValue'>-100</p>
          <p className='card-counterView-cellTitle defeats'>defeats</p>
        </div>
      </div>
    </>
  )
}
export default CounterView
