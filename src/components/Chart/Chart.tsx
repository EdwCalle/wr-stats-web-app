import { ColorType, createChart, IChartApi } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import css from './Chart.module.css'

export interface PointXY {
  time: string | number
  value: number
}
export type DataFrame = PointXY[]
type ChartComponentProps = {
  dataFrame: DataFrame[]
  isXscaleNumber?: boolean
  type: 'lineSeries' | 'baselineSeries'
}
function Chart({ dataFrame, type }: ChartComponentProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

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
      crosshair: {
        vertLine: {
          labelVisible: false,
        },
      },
      timeScale: {
        // timeVisible: true,
        tickMarkFormatter: (time: number) => {
          return time
        },
      },
    })

    chart.timeScale().fitContent()

    // addSeries(chart)

    const seriesArray = []
    if (type === 'baselineSeries')
      dataFrame.forEach((item) => {
        const newSeries = chart.addBaselineSeries()
        newSeries.setData(item)
        seriesArray.push(newSeries)
      })
    else
      dataFrame.forEach((item) => {
        const newSeries = chart.addLineSeries()
        newSeries.setData(item)
        seriesArray.push(newSeries)
      })

    // update tooltip
    chart.subscribeCrosshairMove((param) => {
      if (!tooltipRef.current) return
      if (
        param.point === undefined ||
        !param.time ||
        param.point.x < 0 ||
        param.point.y < 0 ||
        seriesArray.length == 0
      ) {
        tooltipRef.current.style.display = 'none'
      } else {
        // const dateStr = param.time
        tooltipRef.current.style.display = 'block'
        tooltipRef.current.innerHTML = `<div>x:${param.time}</div>`

        // let prices = ''
        // seriesArray.forEach((element) => {
        //   if (param.time) {
        //     element.data().forEach((item: PointXY) => {
        //       if (item.time === param.time) {
        //         prices += `${item.value} `
        //       }
        //     })
        //   }
        //   // const price = data && data.value ? data.value : data.close
        // })
        // tooltipRef.current.innerHTML = `<div>${prices}</div>`

        // Position tooltip according to mouse cursor position
        // tooltipRef.current.style.left = param.point.x + 'px'
        // tooltipRef.current.style.top = param.point.y + 'px'
      }
    })
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
      <div
        ref={tooltipRef}
        style={{ position: 'absolute', top: 0, left: 15 }}
      />
    </div>
  )
}

export default Chart
