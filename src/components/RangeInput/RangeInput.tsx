import { Ranged } from '@/models/match.model'
import Input from '@components/Input/Input'
import SingleSelect, { Option } from '@components/SingleSelect/SingleSelect'
import { DIVISION } from '@utils/constants/constants'
import { Control } from 'react-hook-form'
interface RangeInputProps {
  range: Ranged
  options: Array<{ id: string; value: string }>
  onChangeRangeInput: (range: Ranged) => void
  //fix any problems
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
function RangeInput({
  range,
  control,
  options,
  onChangeRangeInput,
}: RangeInputProps) {
  const onSelectedTierName = (option: Option) => {
    const copyRange = { ...range }
    copyRange.rankedTier._id = option.id
    copyRange.rankedTier.tierName = option.value as string
    onChangeRangeInput(copyRange)
  }
  const onSelectedDivisionLvl = (option: Option) => {
    const copyRange = { ...range }
    copyRange.divisionLvl = option.value as number
    onChangeRangeInput(copyRange)
  }
  // const onChangeMarks = (value: number) => {
  //   const copyRange = { ...range }
  //   copyRange.marks = value
  //   onChangeRangeInput(copyRange)
  // }
  return (
    <div>
      <SingleSelect
        name='tierName'
        onSelectedOption={onSelectedTierName}
        options={options}
        selectedOption={{
          id: range.rankedTier._id,
          value: range.rankedTier.tierName,
        }}
      />
      {/* TO DO
        change way to perform key in selects, due to tierName and DivisionLvl must have the same key
      */}
      <SingleSelect
        name='divisionLvl'
        onSelectedOption={onSelectedDivisionLvl}
        options={DIVISION}
        selectedOption={{
          value: range.divisionLvl,
          id: range.divisionLvl + '',
        }}
      />
      <Input label='soy label' name='marks' type='number' control={control} />
    </div>
  )
}
export default RangeInput
