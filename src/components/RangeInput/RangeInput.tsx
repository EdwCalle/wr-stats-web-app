import { Ranged } from '@/models/match.model'
import InputForm from '@components/InputForm/InputForm'
import SingleSelect from '@components/SingleSelect/SingleSelect'
import { DIVISION, SEASONS } from '@utils/constants/constants'
import { Control } from 'react-hook-form'
interface RangeFormProps {
  range: Ranged
  //fix any problems
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
}
function RangeInput({ range, control }: RangeFormProps) {
  const testSelect = ({ id }: { id: string }) => {
    console.log('from rangeForm:', id)
  }
  return (
    <div>
      {/* <Select options={SEASONS} title='seasons' selectedValue={SEASONS[2]} /> */}
      <SingleSelect
        name='tierName'
        onSelectedOption={testSelect}
        options={SEASONS}
        selectedOption={SEASONS[6]}
      />
      {/* TO DO
        change way to perform key in selects, due to tierName and DivisionLvl must have the same key
      */}
      <SingleSelect
        name='divisionLvl'
        onSelectedOption={testSelect}
        options={DIVISION}
        selectedOption={DIVISION[2]}
      />
      <InputForm
        label='soy label'
        name='marks'
        type='number'
        control={control}
      />
    </div>
  )
}
export default RangeInput
