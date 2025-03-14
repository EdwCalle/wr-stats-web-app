// import RangeInfo from '@components/RangeInfo/RangeInfo'
import Chip, { ChipColor } from '@components/Chip/Chip'
// import { handleShowModal } from '../../utils/logic'
import css from './Details.module.css'
// export enum DetailType {
//   chip,
//   info,
// }
interface DetailsProps {
  data: { label: string; value: string; chipColor: ChipColor }[]
}
function Details({ data }: DetailsProps) {
  // const { playedTime, totalMatches, diff, acumDiff } = match
  // const getBGColor = (
  //   value: number,
  //   { bad, regular, normal }: { bad: number; regular: number; normal: number },
  // ) => {
  //   if (value <= bad) return css.bad
  //   if (value > bad && value <= regular) return css.regular
  //   if (value > regular && value <= normal) return css.normal
  //   if (value > normal) return css.good
  // }

  return (
    <div className={css.content}>
      {data.map((item, index) => (
        <div className={css.detail} key={index}>
          <output className={css.detailInfo}>{item.label}</output>
          <Chip value={item.value} color={item.chipColor} />
        </div>
      ))}
    </div>
  )
}

export default Details
