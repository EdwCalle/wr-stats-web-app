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
  // const chip = (value: string, detailType: DetailType) => {
  //   if (detailType === DetailType.chip) return <Chip value={value} />
  // }

  return (
    <section className={css.content}>
      {/* <RangeInfo range={match.range} isRangeForm={false} /> */}
      {data.map((item, index) => (
        <div className={css.detail} key={index}>
          <output>{item.label}</output>
          <Chip value={item.value} color={item.chipColor} />
        </div>
      ))}
      {/* <button
        className={css.button}
        onClick={() => handleShowModal('crudMatch')}
      >
        edit wr stats
      </button> */}
    </section>
  )
}

export default Details
