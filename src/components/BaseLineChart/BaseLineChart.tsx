import Chart, { DataFrame } from '@components/Chart/Chart'
import { IChartApi } from 'lightweight-charts'

type ChartComponentProps = {
  data: DataFrame
  //   compareData?: DataFrame
}
function BaseLineChart({ data }: ChartComponentProps) {
  const dataFrames: DataFrame[] = [data]
  const addSeries = (chart: IChartApi) => {
    const newSeries = chart.addBaselineSeries()
    newSeries.setData(data)
  }
  return <Chart addSeries={addSeries} dataFrame={dataFrames} />
}

export default BaseLineChart
