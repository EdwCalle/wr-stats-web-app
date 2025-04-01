import Chart, { DataFrame } from '@components/Chart/Chart'
import { IChartApi } from 'lightweight-charts'

const colors = [
  'rgba(255, 0, 0, 1)',
  'rgba(0, 128, 0, 1)',
  'rgba(255, 165, 0, 1)',
  'rgba(128, 0, 128, 1)',
  'rgba(255, 255, 0, 1)',
  'rgba(255, 192, 203, 1)',
  'rgba(165, 42, 42, 1)',
  'rgba(0, 255, 255, 1)',
  'rgba(128, 128, 0, 1)',
  'rgba(0, 255, 0, 1)',
  'rgba(255, 20, 147, 1)',
  'rgba(75, 0, 130, 1)',
  'rgba(255, 69, 0, 1)',
  'rgba(0, 191, 255, 1)',
  'rgba(46, 139, 87, 1)',
  'rgba(123, 104, 238, 1)',
  'rgba(255, 228, 181, 1)',
  'rgba(0, 100, 0, 1)',
  'rgba(255, 215, 0, 1)',
  'rgba(138, 43, 226, 1)',
  'rgba(240, 128, 128, 1)',
  'rgba(70, 130, 180, 1)',
  'rgba(210, 105, 30, 1)',
  'rgba(0, 255, 127, 1)',
  'rgba(255, 140, 0, 1)',
  'rgba(199, 21, 133, 1)',
  'rgba(112, 128, 144, 1)',
]

type ChartComponentProps = {
  data: DataFrame[]
}
function LineChart({ data }: ChartComponentProps) {
  console.log('my data', data)
  const addSeries = (chart: IChartApi) => {
    data.forEach((item, index) => {
      const color = colors[index % colors.length]
      const newSeries = chart.addLineSeries({ color })
      newSeries.setData(item)
    })
  }
  return <Chart addSeries={addSeries} dataFrame={data} isXscaleNumber />
}

export default LineChart
