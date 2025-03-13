import { TierType } from '../../utils/enums/rankedTier.enum'
import { RangeI } from '../../utils/interfaces/match.interface'

interface RangeInfoProps {
  range: RangeI
  type: 'normal' | 'compact'
}
function RangeInfo({ range }: RangeInfoProps) {
  if (range.rankedTier.tierType === TierType.DIVISION) return
  ;<div>
    {range.rankedTier.tierName} {range.divisionLvl} {range.rankedTier.minMarks}
    {'/'}
    {range.rankedTier.maxMarks} : {range.marks}
  </div>
}
export default RangeInfo
