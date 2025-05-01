// import imgDiamond from '@/assets/diamond.webp'
import Tooltip from '@components/Tooltip/Tooltip'
import { imagesTier } from '@utils/constants/constants'
import imgMark from '../../assets/mark.webp'
import { RangeWR } from '../../models/match.model'
import css from './RangeInfo.module.css'
//TO DO
//Change range interface name
export enum RangeType {
  info,
  compact,
}
type RangeInfoProps = {
  range: RangeWR
  type?: RangeType
}
// const rangeTest: Ranged = {
//   divisionLvl: 1,
//   marks: 1,
//   rankedTier: {
//     _id: 'asd',
//     maxMarks: 12,
//     minMarks: 0,
//     tierName: 'grandmaster',
//     tierSeason: TierSeason.DEFAULT,
//     tierType: TierType.MARK,
//   },
// }
const cssRangeInfoType: { [key in RangeType]: string } = {
  [RangeType.info]: css.rangeInfo,
  [RangeType.compact]: css.rangeCompact,
}
function RangeInfo({ type = RangeType.info, range }: RangeInfoProps) {
  const classNameRange = cssRangeInfoType[type]
  const { rankedTier, divisionLvl, marks } = range
  const imageName =
    rankedTier.tierName in imagesTier
      ? (rankedTier.tierName as keyof typeof imagesTier)
      : 'default'

  const toRoman = (num: number): string => {
    switch (num) {
      case 1:
        return 'I'
      case 2:
        return 'II'
      case 3:
        return 'III'
      case 4:
        return 'IV'
      default:
        return ''
    }
  }

  const fullTierName = `${rankedTier.tierName} ${toRoman(divisionLvl)}`
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
      <div className={css.rangeViewMarks}>
        {fullMarks}
        <img src={imgMark} className={css.rangeMarks} />
        <Tooltip label={`min-max ${minMaxMarks} marks`} />
      </div>
    </div>
  )
}
export default RangeInfo
