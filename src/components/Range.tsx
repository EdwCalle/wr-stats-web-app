// import imgDiamond from '@/assets/diamond.webp'
import imgMark from '../assets/mark.webp'
import css from './Range.module.css'
import { imagesTier } from '../utils/constants'
import { Range as RangeI } from '../utils/interfaces/match.interface'
import { TierSeason, TierType } from '../utils/enums/rankedTier.enum'
//TO DO
//Change range interface name
type RangeProps = {
  range?: RangeI
  isRangeForm: boolean
  children?: React.ReactNode
}
const rangeTest: RangeI = {
  divisionLvl: 1,
  marks: 1,
  rankedTierID: 'id123123',
  rankedTier: {
    id: 'asd',
    maxMarks: 12,
    minMarks: 0,
    tierName: 'grandmaster',
    tierSeason: TierSeason.DEFAULT,
    tierType: TierType.MARK,
  },
}
function Range({ children, isRangeForm, range = rangeTest }: RangeProps) {
  const classNameRange = isRangeForm === true ? css.rangeGrid : css.range
  // const value = data()
  const { rankedTier, divisionLvl, marks } = range
  const tierName = rankedTier.tierName as keyof typeof imagesTier

  return (
    <section className={classNameRange}>
      {children}
      <img
        className={css.rangeImage}
        src={imagesTier[tierName]}
        alt={`ranked image:${tierName}`}
      />
      <h5 className={css.rangeTier}>
        {tierName} {divisionLvl}
      </h5>
      <p className={css.rangeDivision}>
        {marks} <img src={imgMark} className={css.rangeMarks} />
      </p>
    </section>
  )
}
export default Range
