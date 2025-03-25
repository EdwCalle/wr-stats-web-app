import { Ranged } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.models'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import Select from '@components/Select/Select'
import Slider from '@components/Slider/Slider'
import { DIVISION } from '@utils/constants/constants'
import { TierType } from '@utils/enums/rankedTier.enum'
import css from './RangeInput.module.css'
interface RangeInputProps {
  range: Ranged
  rankedTiers: RankedTier[]
  onChangeRangeInput: (range: Ranged) => void
}
function RangeInput({
  range,
  rankedTiers,
  onChangeRangeInput,
}: RangeInputProps) {
  const rankedOptions = rankedTiers.map(({ _id, tierName }) => ({
    id: _id,
    value: tierName,
  }))
  const onChangeRankedTier = (rankedTierID: string) => {
    const foundRankedTier = rankedTiers.find(
      (item) => item._id === rankedTierID,
    )
    if (foundRankedTier) range.rankedTier = foundRankedTier
    onChangeRangeInput({ ...range })
  }

  const onChangeDivisionLvl = (divisionLvl: string) => {
    range.divisionLvl = Number(divisionLvl)
    onChangeRangeInput({ ...range })
  }
  const onChangeMarks = (marks: string) => {
    range.marks = Number(parseInt(marks))
    onChangeRangeInput({ ...range })
  }
  return (
    <div className={css.range}>
      <RangeInfo range={range} />
      <Select
        name='tierName'
        onSelectedOption={onChangeRankedTier}
        options={rankedOptions}
        selectedOption={{
          id: range.rankedTier._id,
          value: range.rankedTier.tierName,
        }}
      />
      {range.rankedTier.tierType === TierType.DIVISION && (
        <Select
          name='divisionLvl'
          onSelectedOption={onChangeDivisionLvl}
          options={DIVISION}
          selectedOption={{
            id: range.divisionLvl,
            value: range.divisionLvl,
          }}
        />
      )}
      <Slider
        defaultValue={range.marks}
        min={range.rankedTier.minMarks}
        max={range.rankedTier.maxMarks}
        onChange={onChangeMarks}
        label='marks'
      />
    </div>
  )
}
export default RangeInput
