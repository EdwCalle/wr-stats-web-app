// import imgDiamond from '@/assets/diamond.webp'
import Tooltip from '@components/Tooltip/Tooltip'
import imgMark from '../../assets/mark.webp'
import { Ranged } from '../../models/match.model'
import { imagesTier } from '../../utils/constants/constants'
import { TierSeason, TierType } from '../../utils/enums/rankedTier.enum'
import css from './RangeInfo.module.css'
//TO DO
//Change range interface name
export enum RangeType {
  info,
  compact,
  form,
}
type RangeInfoProps = {
  range?: Ranged
  type?: RangeType
}
const rangeTest: Ranged = {
  divisionLvl: 1,
  marks: 1,
  rankedTier: {
    _id: 'asd',
    maxMarks: 12,
    minMarks: 0,
    tierName: 'grandmaster',
    tierSeason: TierSeason.DEFAULT,
    tierType: TierType.MARK,
  },
}
const cssRangeInfoType: { [key in RangeType]: string } = {
  [RangeType.info]: css.rangeInfo,
  [RangeType.compact]: css.rangeCompact,
  [RangeType.form]: css.rangeForm,
}
function RangeInfo({
  type = RangeType.info,
  range = rangeTest,
}: RangeInfoProps) {
  const classNameRange = cssRangeInfoType[type]
  const { rankedTier, divisionLvl, marks } = range
  const imageName =
    (rankedTier.tierName as keyof typeof imagesTier) || 'default'

  const fullTierName = `${rankedTier.tierName} ${divisionLvl}`
  const fullMarks = `${marks}/${rankedTier.maxMarks}`
  const minMaxMarks = `${rankedTier.minMarks}/${rankedTier.maxMarks}`

  return (
    <div className={classNameRange}>
      <img
        className={css.rangeImage}
        src={imagesTier[imageName]}
        alt={`ranked image:${imageName}`}
      />
      <span className={css.rangeTier}>{fullTierName}</span>
      <div className={css.viewMarks}>
        {fullMarks}
        <img src={imgMark} className={css.rangeMarks} />
        <Tooltip label={`current min/max ${minMaxMarks} marks`} />
      </div>
    </div>
  )
}
export default RangeInfo
