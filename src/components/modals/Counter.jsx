import '../../css/Counter.css'

function Counter() {
  return (
    <section className='counter'>
      <div className='counter-box'>
        <h3 className='counter-box-title'>100</h3>
        <div className='counter-box-button blue'>
          <button>-</button>
          <h4>Wins</h4>
          <button>+</button>
        </div>
      </div>
      <div className='counter-box'>
        <h3 className='counter-box-title'>100</h3>
        <div className='counter-box-button red'>
          <button>-</button>
          <h4>Defeats</h4>
          <button>+</button>
        </div>
      </div>
    </section>
  )
}
export default Counter
