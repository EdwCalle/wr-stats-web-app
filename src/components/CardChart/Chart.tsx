import { ColorType, createChart, IChartApi } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import css from './Chart.module.css'

export interface Axes {
  time: string
  value: number
}
export type Serie = Axes[]
type ChartComponentProps = {
  data: Serie[] | Serie
  addSeries: (chart: IChartApi) => void
}
function Chart({ data, addSeries }: ChartComponentProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const handleResize = (chart: IChartApi) => {
    if (!chartContainerRef.current) return
    chart.applyOptions({
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    })
  }

  // const getNewSeries = (chart: IChartApi, data: Serie[]) => {
  //   return data.map((item, index) => {
  //     const r = Math.round((index * 255) / data.length)
  //     const g = Math.round(255 - (index * 255) / data.length)
  //     const b = 150
  //     return getNewSerie(chart, item, `rgb(${r}, ${g}, ${b})`)
  //   })
  // }

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
      // timeScale: {
      //   timeVisible: true,
      //   tickMarkFormatter: (time: number) => {
      //     return time + 1
      //   },
      // },
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
  }, [data])
  return (
    <div className={css.chartContainer}>
      <div ref={chartContainerRef} className={css.chart} />
    </div>
  )
}
console.log('chart')

export default Chart
