import Card from '@components/Card/Card'
import Select from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { useSelect } from '@hooks/useSelect'
import { SEASON_MODE } from '@utils/constants/constants'
import { useEffect } from 'react'
import CompareMatchesChart from './CompareMatchesChart'
import MatchesBySeasonChart from './MatchesBySeasonChart'

function CardChart() {
  const { autoLoadMatches, getDataFrame, getMatchesBySeason } = useMatches()
  const { autoLoadSeasonsProfile, toSeasonsProfileOptions } = useSeasonProfile()
  const [selectedMode, updateSelectedMode] = useSelect(SEASON_MODE)

  // const timeScaleFilter = useSelect(TIME_SCALE)
  const seasonsOptions = toSeasonsProfileOptions()

  const loadData = async () => {
    await autoLoadMatches()
    await autoLoadSeasonsProfile()
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <Card>
      <Select
        name='filterMode'
        label='select filter mode'
        options={SEASON_MODE}
        selectedOption={selectedMode}
        onSelectedOption={updateSelectedMode}
      />
      {selectedMode.id === 'compare' && (
        <CompareMatchesChart
          seasonsProfile={seasonsOptions}
          getDataFrame={getDataFrame}
        />
      )}
      {selectedMode.id === 'by_season' && (
        <MatchesBySeasonChart
          SeasonsProfile={[{ id: 'all', value: 'all' }, ...seasonsOptions]}
          getMatchesBySeason={getMatchesBySeason}
        />
      )}
    </Card>
  )
}

export default CardChart
