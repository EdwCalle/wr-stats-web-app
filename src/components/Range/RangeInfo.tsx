// import imgDiamond from '@/assets/diamond.webp'
import imgMark from '../../assets/mark.webp'
import css from './RangeInfo.module.css'
import { imagesTier } from '../../utils/constants'
import { Range } from '../../services/Match/match.model'
import { TierSeason, TierType } from '../../utils/enums/rankedTier.enum'
//TO DO
//Change range interface name
export enum RangeInfoType {
  info,
  compact,
  form,
}
type RangeInfoProps = {
  range?: Range
  type: RangeInfoType
}
const rangeTest: Range = {
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
const cssRangeInfoType: { [key in RangeInfoType]: string } = {
  [RangeInfoType.info]: css.rangeInfo,
  [RangeInfoType.compact]: css.rangeCompact,
  [RangeInfoType.form]: css.rangeForm,
}
function RangeInfo({ type, range = rangeTest }: RangeInfoProps) {
  const classNameRange = cssRangeInfoType[type]
  const { rankedTier, divisionLvl, marks } = range
  const tierName = (rankedTier.tierName as keyof typeof imagesTier) || 'default'

  return (
    <div className={classNameRange}>
      <img
        className={css.rangeImage}
        src={imagesTier[tierName]}
        alt={`ranked image:${tierName}`}
      />
      <div className={css.rangeTier}>
        {tierName} {divisionLvl}
      </div>
      <div className={css.viewMarks}>
        {marks} <img src={imgMark} className={css.rangeMarks} />
      </div>
    </div>
  )
}
export default RangeInfo
