import { Option } from '@components/Select/Select'
import { useState } from 'react'

export const useSelect = (
  filtersOptions: Option[],
): [Option, (id: string) => void] => {
  const [selectedOption, setSelectedOption] = useState<Option>({
    ...filtersOptions[0],
  })
  const onSelectedOption = (id: string): void => {
    const newOption = filtersOptions.find((item) => item.id === id)
    if (newOption) setSelectedOption({ ...newOption })
  }
  return [selectedOption, onSelectedOption]
}
