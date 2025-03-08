// import imgDiamond from '@/assets/diamond.webp'
import imgMark from '../assets/mark.webp'
import css from './Range.module.css'
import { imagesTier } from '../constants'
function Range({ children, isRangeForm, data }) {
  const classNameRange = isRangeForm === true ? css.rangeGrid : css.range
  // const value = data()
  const { tier, division, marks } = data

  // const getRange = () => {
  //   console.log(RankedTier + ' espera')
  //   const ranges = RankedTier.split(' ')
  //   console.log(ranges)
  //   const marks = points ? points : 's/n'
  //   console.log('im markssss' + marks)
  //   if (ranges.lenght == 2)
  //     return { tier: ranges[0], division: ranges[1], marks: marks }
  //   if (ranges.lenght == 1)
  //     return { tier: ranges[0], division: 's/n', marks: marks }
  //   else return { tier: 's/n', division: 's/n', marks: marks }
  // }

  return (
    <section className={classNameRange}>
      {children}
      <img
        className={css.rangeImage}
        src={imagesTier[tier]}
        alt={`ranked image:${tier}`}
      />
      <h5 className={css.rangeTier}>
        {tier} {division}
      </h5>
      <p className={css.rangeDivision}>
        {marks} <img src={imgMark} className={css.rangeMarks} />
      </p>
    </section>
  )
}
export default Range
