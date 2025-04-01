import { ColorType, createChart, IChartApi } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import css from './Chart.module.css'

export interface PointXY {
  time: string
  value: number
}
export type DataFrame = PointXY[]
type ChartComponentProps = {
  dataFrame: DataFrame[]
  addSeries: (chart: IChartApi) => void
  isXscaleNumber: boolean
}
function Chart({ dataFrame, addSeries }: ChartComponentProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const handleResize = (chart: IChartApi) => {
    if (!chartContainerRef.current) return
    chart.applyOptions({
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    })
  }

  useEffect(() => {
    if (!chartContainerRef.current) return

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: 'white',
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
      timeScale: {
        timeVisible: true,
        tickMarkFormatter: (time: number) => {
          return time + 1
        },
      },
    })

    chart.timeScale().fitContent()

    addSeries(chart)

    const resize = () => {
      handleResize(chart)
    }
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      chart.remove()
    }
  }, [dataFrame])
  return (
    <div className={css.chartContainer}>
      <div ref={chartContainerRef} className={css.chart} />
    </div>
  )
}
console.log('chart')

export default Chart
