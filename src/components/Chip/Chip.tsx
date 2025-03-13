import { RangeI } from '../../utils/interfaces/match.interface'
import css from './Chip.module.css'
//TO DO
//(global) change type props to interface
// create styles for ChipType
export enum ChipType {
  default,
  extended,
  range,
}
export enum ChipColor {
  default,
  good,
  neutral,
  regular,
  bad,
}

interface ChipProps {
  value: string | number | boolean | RangeI | null
  type?: ChipType
  color?: ChipColor
}
const cssTypes: { [key in ChipType]: string } = {
  [ChipType.default]: '',
  [ChipType.extended]: css.extended,
  [ChipType.range]: css.extended,
}
const cssColors: { [key in ChipColor]: string } = {
  [ChipColor.default]: css.default,
  [ChipColor.good]: css.good,
  [ChipColor.neutral]: css.neutral,
  [ChipColor.regular]: css.regular,
  [ChipColor.bad]: css.bad,
}
function Chip({
  value,
  type = ChipType.default,
  color = ChipColor.default,
}: ChipProps) {
  return (
    <output
      className={`${css.chip} ${cssTypes[type]} ${cssColors[color]}`}
    ></output>
  )
}

export default Chip
