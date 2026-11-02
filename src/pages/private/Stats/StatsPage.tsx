import Card from '@components/Card/Card'
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import Main from '@components/Layout/Main/Main'
import Loader from '@components/Loader/Loader'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { showError } from '@utils/modules/HandleErrors'
import { useEffect, useState } from 'react'
import CustomChart from './CustomChart/CustomChart'

function StatsPage() {
  const { matches, loadMatches, getMatches, getMatchesbyCompare } = useMatches()
  const { seasonsProfile, autoLoadSeasonsProfile, toSeasonsProfileOptions } =
    useSeasonProfile()
  const [isLoading, setisLoading] = useState(true)
  // const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    try {
      setisLoading(true)
      const newMatches = await getMatches()
      loadMatches(newMatches)
      await autoLoadSeasonsProfile(newMatches)
    } catch (error) {
      showError(error, 'error on loading resources')
    } finally {
      setisLoading(false)
    }
  }
  useEffect(() => {
    loadData()
  }, [])

  const seasonsOptions = toSeasonsProfileOptions()
  if (isLoading) return <Loader label='loading stats...' />
  if (seasonsProfile.length == 0)
    return <ErrorMessage message='no seasons found' />
  if (matches.length == 0) return <ErrorMessage message='No matches found' />
  return (
    <Main title='STATS' isFullSize>
      <Card title='Winrate by season' type='table'>
        <CustomChart
          options={seasonsOptions}
          getSeriesData={getMatchesbyCompare}
          label='seasons'
          name='date_winrate'
        />
      </Card>
      {/* <Card title='Range by season'>
        <CustomChart
          options={seasonsOptions}
          getSeriesData={getMatchesbyCompare}
          label='seasons'
          name='date_range'
        />
      </Card> */}
    </Main>
  )
}
export default StatsPage
