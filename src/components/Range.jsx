import imgDiamond from './../assets/diamond.webp'
import './../css/Range.css'
function Range({ children, isRangeForm }) {
  const classNameRange = isRangeForm === true ? 'card-range-grid' : 'card-range'

  return (
    <section className={classNameRange}>
      {children}
      <img
        className='card-range-image'
        src={imgDiamond}
        alt='imagen de tier en diamante'
      />
      <h5 className='card-range-tier'>GRAND MASTER</h5>
      <p className='card-range-division'>
        500/500 <img src={imgDiamond} className='card-range-marks' />
      </p>
    </section>
  )
}
export default Range
