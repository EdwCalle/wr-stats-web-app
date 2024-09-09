import imgDiamond from '@/assets/diamond.webp'
import css from './Range.module.css'
function Range({ children, isRangeForm }) {
  const classNameRange = isRangeForm === true ? css.rangeGrid : css.range

  return (
    <section className={classNameRange}>
      {children}
      <img
        className={css.rangeImage}
        src={imgDiamond}
        alt='imagen de tier en diamante'
      />
      <h5 className={css.rangeTier}>GRAND MASTER</h5>
      <p className={css.rangeDivision}>
        500/500 <img src={imgDiamond} className={css.rangeMarks} />
      </p>
    </section>
  )
}
export default Range
