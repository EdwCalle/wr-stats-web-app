import { Match } from '@/models/match.model'
import Button from '@components/Button/Button'
import Card, { CardType } from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Details from '@components/Details/Details'
import RangeInfo from '@components/RangeInfo/RangeInfo'
import useModal from '@hooks/useModal'

interface CardDetailsProps {
  currentMatch: Match
}
function CardDetails({ currentMatch }: CardDetailsProps) {
  const { openModal } = useModal()
  return (
    <Card
      title='Match Details'
      subtitle={currentMatch.seasonProfile.season.seasonName}
      type={CardType.details}
    >
      <RangeInfo range={currentMatch.range} />
      <Details
        data={[
          {
            label: 'victories',
            chipColor: ChipColor.good,
            value: `${currentMatch.victories}`,
          },
          {
            label: 'defeats',
            chipColor: ChipColor.bad,
            value: `${currentMatch.defeats}`,
          },
          {
            label: 'diff',
            chipColor: ChipColor.neutral,
            value: `${currentMatch.stats?.diff}`,
          },
          {
            label: 'total matches',
            chipColor: ChipColor.default,
            value: `${currentMatch.stats?.totalMatches}`,
          },
          {
            label: 'acum diff',
            chipColor: ChipColor.default,
            value: `${currentMatch.stats?.acumDiff}`,
          },
          {
            label: 'estimated played time',
            chipColor: ChipColor.default,
            value: `${currentMatch.stats?.playedTime}`,
          },
        ]}
      />
      {/* TO DO
          fix footer, button should go to footer
          */}
      <Button handleClick={() => openModal('crudMatch')}>Edit Match</Button>
    </Card>
  )
}

export default CardDetails
