import { useCrudMatch } from '@/context/CrudMatchContext'
import { Match } from '@/models/match.model'
import Button from '@components/Button/Button'
import Card, { CardType } from '@components/Card/Card'
import { ChipColor } from '@components/Chip/Chip'
import Details from '@components/Details/Details'
import RangeInfo from '@components/RangeInfo/RangeInfo'

interface CardDetailsProps {
  currentMatch: Match | undefined
  date: Date
}

function CardDetails({ currentMatch, date }: CardDetailsProps) {
  const { resetCrudMatch } = useCrudMatch()
  if (currentMatch)
    return (
      <>
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
          <Button handleClick={() => resetCrudMatch(currentMatch, date)}>
            Edit Match
          </Button>
        </Card>
      </>
    )
  else
    return (
      <>
        <Card title='Match Details' subtitle=''>
          <Button handleClick={() => resetCrudMatch(undefined, date)}>
            new Match
          </Button>
        </Card>
      </>
    )
}

export default CardDetails
