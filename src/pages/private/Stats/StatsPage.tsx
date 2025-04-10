import Card from '@components/Card/Card'
import Main from '@components/Layout/Main/Main'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { useEffect } from 'react'
import CustomChart from './CustomChart/CustomChart'

function StatsPage() {
  const { autoLoadMatches, getMatchesbyCompare } = useMatches()
  const { autoLoadSeasonsProfile, toSeasonsProfileOptions } = useSeasonProfile()
  // const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    await autoLoadSeasonsProfile()
    await autoLoadMatches()
  }
  useEffect(() => {
    loadData()
  }, [])

  const seasonsOptions = toSeasonsProfileOptions()
  return (
    <Main title='STATS'>
      <Card title='Winrate by season' subtitle=''>
        <CustomChart
          options={seasonsOptions}
          getDataFrame={getMatchesbyCompare}
          label=''
          name='date_winrate'
        />
      </Card>
      <Card title='Range by season' subtitle=''>
        <CustomChart
          options={seasonsOptions}
          getDataFrame={getMatchesbyCompare}
          label=''
          name='date_range'
        />
      </Card>
    </Main>
  )
}
export default StatsPage
