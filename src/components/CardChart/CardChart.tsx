import BaseLineChart from '@components/BaseLineChart/BaseLineChart'
import Card from '@components/Card/Card'
import LineChart from '@components/LineChart/LineChart'
import Select from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { useSelect } from '@hooks/useSelect'
import { FILTER_SEASONS, TIME_SCALE } from '@utils/constants/constants'
import { useEffect } from 'react'

function CardChart() {
  const { autoLoadMatches, toMatchesOptions } = useMatches()
  const { autoLoadSeasonsProfile, toSeasonsProfileOptions } = useSeasonProfile()

  const matchesOptions = toMatchesOptions()
  const seasonsOptions = toSeasonsProfileOptions()

  const seasonModeFilter = useSelect(FILTER_SEASONS)
  const seasonFilter = useSelect(seasonsOptions)
  const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    await autoLoadMatches()
    await autoLoadSeasonsProfile()
  }
  useEffect(() => {
    loadData()
  }, [])
  const onSelectedSeason = (seasonProfileID: string) => {
    seasonFilter[1](seasonProfileID)
    autoLoadMatches({ seasonProfileID, page: 1, limit: 0 })
  }
  console.log('a lot of')
  return (
    <Card>
      <form>
        <Select
          name='filterMode'
          label='select filter mode'
          options={FILTER_SEASONS}
          selectedOption={seasonModeFilter[0]}
          onSelectedOption={seasonModeFilter[1]}
        />
        <Select
          name='seasons'
          label='select season'
          options={seasonsOptions}
          selectedOption={seasonFilter[0]}
          onSelectedOption={onSelectedSeason}
        />
      </form>
      <LineChart
        data={[
          // matchesOptions,
          matchesOptions.slice(0, 11),
          matchesOptions.slice(20, 30),
          matchesOptions.slice(30, 40),
          matchesOptions.slice(40, 50),
          matchesOptions.slice(50, 60),
          matchesOptions.slice(60, 70),
          matchesOptions.slice(70, 80),
          matchesOptions.slice(80, 90),
          matchesOptions.slice(90, 100),
        ]}
      />
      <BaseLineChart data={matchesOptions} />
      <form>
        <Select
          name='timeScales'
          label='select time'
          options={TIME_SCALE}
          selectedOption={timeScaleFilter[0]}
          onSelectedOption={timeScaleFilter[1]}
        />
      </form>
    </Card>
  )
}
export default CardChart
