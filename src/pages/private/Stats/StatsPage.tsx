import Card from '@components/Card/Card'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import Main from '@components/Layout/Main/Main'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { useEffect } from 'react'
import CustomChart from './CustomChart/CustomChart'

function StatsPage() {
  const { matches, loadMatches, getMatches, getMatchesbyCompare } = useMatches()
  const { seasonsProfile, autoLoadSeasonsProfile, toSeasonsProfileOptions } =
    useSeasonProfile()
  // const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    const newMatches = await getMatches()
    loadMatches(newMatches)
    await autoLoadSeasonsProfile(newMatches)
  }
  useEffect(() => {
    loadData()
  }, [])

  const seasonsOptions = toSeasonsProfileOptions()
  if (seasonsProfile.length == 0)
    return <ErrorMessage message='>not seasons founded' />
  if (matches.length == 0)
    return <ErrorMessage message='>not matches founded' />
  return (
    <Main title='STATS'>
      <Card title='Winrate by season' subtitle=''>
        <CustomChart
          options={seasonsOptions}
          getSeriesData={getMatchesbyCompare}
          label=''
          name='date_winrate'
        />
      </Card>
      <Card title='Range by season' subtitle=''>
        <CustomChart
          options={seasonsOptions}
          getSeriesData={getMatchesbyCompare}
          label=''
          name='date_range'
        />
      </Card>
    </Main>
  )
}
export default StatsPage
