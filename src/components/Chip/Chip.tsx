import css from './Chip.module.css'
//TO DO
//(global) change type props to interface
// create styles for ChipType

export enum ChipColor {
  default,
  good,
  neutral,
  regular,
  bad,
  none,
}

interface ChipProps {
  value: string | number | null | boolean
  color?: ChipColor
}

const cssColors: { [key in ChipColor]: string } = {
  [ChipColor.default]: css.default,
  [ChipColor.good]: css.good,
  [ChipColor.neutral]: css.neutral,
  [ChipColor.regular]: css.regular,
  [ChipColor.bad]: css.bad,
  [ChipColor.none]: css.none,
}
function Chip({ value, color = ChipColor.default }: ChipProps) {
  return <output className={`${css.chip} ${cssColors[color]}`}>{value}</output>
}
export default Chip
