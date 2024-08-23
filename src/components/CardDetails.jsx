import './../css/Card.css'
import './../css/CardDetails.css'
// import imgDiamond from './../assets/diamond.webp'
import Range from '../components/Range'
function CardDetails({ showCrudMatch }) {
  return (
    <article className='card card-details'>
      <div className='card-header'>
        <h3 className='card-title'>MORE DETAILS</h3>
        <h4 className='card-subtitle'>Season 14</h4>
      </div>
      <article className='card-content'>
        <Range></Range>
        {/* <article className='card-range'>
          <img
            className='card-range-image'
            src={imgDiamond}
            alt='imagen de tier en diamante'
          />
          <h5 className='card-range-tier'>GRAND MASTER</h5>
          <p className='card-range-division'>
            500/500 <img src={imgDiamond} className='card-range-marks' />
          </p>
        </article> */}
        <article className='card-info'>
          <p className='card-info-title'>ESTIMATED PLAYED TIME</p>
          <p className='card-info-value bad'>-100</p>
          <p className='card-info-title'>Hello there</p>
          <p className='card-info-value regular'>-100</p>
          <p className='card-info-title'>ESTIMATED PLAYED TIME</p>
          <p className='card-info-value normal'>-100</p>
          <p className='card-info-title'>ESTIMATED PLAYED TIME</p>
          <p className='card-info-value good'>-100</p>
        </article>
      </article>

      <button className='card-button' onClick={showCrudMatch}>
        edit wr stats
      </button>
    </article>
  )
}

export default CardDetails
