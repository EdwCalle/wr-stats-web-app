import { Ranged } from '@/models/match.model'
import Input from '@components/Input/Input'
import Select, { Option } from '@components/Select/Select'
import { DIVISION } from '@utils/constants/constants'
import { Control } from 'react-hook-form'
interface RangeInputProps {
  range: Ranged
  options: Option[]
  onChangeRangeInput: (Range: Ranged) => void
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
  const onSelectedTierName = (id: string) => {
    const copyRange = { ...range }
    onChangeRangeInput(copyRange)
    console.log('asdasd', id)
  }
  const onSelectedDivisionLvl = (id: string) => {
    const copyRange = { ...range }
    onChangeRangeInput(copyRange)
    console.log('asdasd', id)
  }
  // const onChangeMarks = (value: number) => {
  //   const copyRange = { ...range }
  //   copyRange.marks = value
  //   onChangeRangeInput(copyRange)
  // }
  return (
    <>
      <Select
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
      <Select
        name='divisionLvl'
        onSelectedOption={onSelectedDivisionLvl}
        options={DIVISION}
        selectedOption={{
          id: range.divisionLvl,
          value: range.divisionLvl,
        }}
      />
      <Input label='soy label' name='marks' type='number' control={control} />
    </>
  )
}
export default RangeInput
