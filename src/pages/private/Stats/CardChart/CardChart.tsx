import BaseLineChart from '@components/BaseLineChart/BaseLineChart'
import Card from '@components/Card/Card'
import LineChart from '@components/LineChart/LineChart'
import MultipleSelect from '@components/MultipleSelect/MultipleSelect'
import Select from '@components/Select/Select'
import { useMatches } from '@hooks/useMatches'
import { useSeasonProfile } from '@hooks/useSeasonProfile'
import { useSelect } from '@hooks/useSelect'
import { SEASON_MODE } from '@utils/constants/constants'
import { useEffect } from 'react'
import CompareMatchesChart from './CompareMatchesChart'

function CardChart() {
  const { autoLoadMatches, toMatchesOptions } = useMatches()
  const { autoLoadSeasonsProfile, toSeasonsProfileOptions } = useSeasonProfile()

  const matchesOptions = toMatchesOptions()
  const seasonsOptions = toSeasonsProfileOptions()

  const [selectedMode, updateSelectedMode] = useSelect(SEASON_MODE)

  const seasonFilter = useSelect(seasonsOptions)
  // const timeScaleFilter = useSelect(TIME_SCALE)

  const loadData = async () => {
    await autoLoadMatches()
    await autoLoadSeasonsProfile()
  }
  useEffect(() => {
    loadData()
  }, [])
  const onSelectedSeason = (seasonProfileID: string) => {
    seasonFilter[1](seasonProfileID)
    autoLoadMatches()
  }
  return (
    <Card>
      <Select
        name='filterMode'
        label='select filter mode'
        options={SEASON_MODE}
        selectedOption={selectedMode}
        onSelectedOption={updateSelectedMode}
      />
      <CompareMatchesChart seasonsProfile={toSeasonsProfileOptions()} />

      {selectedMode.id === 'by_season' && (
        <>
          <form>
            <Select
              name='seasons'
              label='select season'
              options={seasonsOptions}
              selectedOption={seasonFilter[0]}
              onSelectedOption={onSelectedSeason}
            />
          </form>
          <BaseLineChart data={matchesOptions} />
        </>
      )}
      {selectedMode.id === 'compare' && (
        <>
          <form>
            <MultipleSelect
              name='seasons'
              label='select seasons'
              options={seasonsOptions}
            />
          </form>
          <LineChart data={[matchesOptions.slice(0, 11)]} />
          {/* <Select
          name='timeScales'
          label='select time'
          options={TIME_SCALE}
          selectedOption={timeScaleFilter[0]}
          onSelectedOption={timeScaleFilter[1]}
          /> */}
        </>
      )}
    </Card>
  )
}

export default CardChart
