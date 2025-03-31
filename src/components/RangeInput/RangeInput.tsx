import { RangeWR } from '@/models/match.model'
import { RankedTier } from '@/models/rankedTier.model'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import Select from '@components/Select/Select'
import Slider from '@components/Slider/Slider'
import { DIVISION } from '@utils/constants/constants'
import { TierType } from '@utils/enums/rankedTier.enum'
import css from './RangeInput.module.css'
interface RangeInputProps {
  range: RangeWR
  rankedTiers: RankedTier[]
  onChangeRangeInput: (range: RangeWR) => void
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
    if (foundRankedTier) {
      const newRange = structuredClone(range)
      newRange.rankedTier = foundRankedTier
      newRange.marks = foundRankedTier.minMarks ?? 0
      if (foundRankedTier.tierType !== TierType.DIVISION)
        newRange.divisionLvl = 0
      onChangeRangeInput(newRange)
    } else {
      throw Error('error on getting rankedTier')
    }
  }

  const onChangeDivisionLvl = (divisionLvl: string) => {
    const newRange = structuredClone(range)
    newRange.divisionLvl = Number(divisionLvl)
    onChangeRangeInput(newRange)
  }
  const onChangeMarks = (marks: string) => {
    const newRange = structuredClone(range)
    newRange.marks = Number(marks)
    onChangeRangeInput(newRange)
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
      {range.rankedTier.tierType !== TierType.EMPTY && (
        <Slider
          defaultValue={range.marks}
          min={range.rankedTier.minMarks}
          max={range.rankedTier.maxMarks}
          onChange={onChangeMarks}
          label='marks'
        />
      )}
    </div>
  )
}
export default RangeInput
