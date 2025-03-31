import { CiCircleQuestion } from 'react-icons/ci'
import css from './Tooltip.module.css'
interface TooltipProps {
  label: string
}

function Tooltip({ label }: TooltipProps) {
  return (
    <div className={css.tooltip}>
      <span className={css.tooltiptext}>{label}</span>
      <CiCircleQuestion />
    </div>
  )
}
export default Tooltip
