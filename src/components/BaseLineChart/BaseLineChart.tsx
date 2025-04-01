import Chart, { Serie } from '@components/CardChart/Chart'
import { IChartApi } from 'lightweight-charts'

type ChartComponentProps = {
  data: Serie
}
function BaseLineChart({ data }: ChartComponentProps) {
  const addSeries = (chart: IChartApi) => {
    const newSeries = chart.addBaselineSeries({
      //     color: backgroundColor,
      baseValue: { type: 'price', price: 0 },
      //   })
    })
    newSeries.setData(data)
  }

  return <Chart addSeries={addSeries} data={data} />
}

export default BaseLineChart
