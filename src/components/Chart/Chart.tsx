import { ColorType, createChart, IChartApi, LineData } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
import css from './Chart.module.css'

export interface PointXY {
  time: string | number
  value: number
  extraInfo?: string
}

export interface SeriesData {
  dataframe: PointXY[]
  color?: string
  label?: string
}
type ChartComponentProps = {
  multiSeries: SeriesData[]
  isXscaleNumber?: boolean
  type: 'lineSeries' | 'baselineSeries'
}
function Chart({ multiSeries, type }: ChartComponentProps) {
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
        borderColor: '#ffffff3f',

        // timeVisible: true,
        tickMarkFormatter: (time: number) => {
          if (type === 'baselineSeries') return time
          return ''
        },
      },
      rightPriceScale: {
        borderColor: '#ffffff3f',
      },
    })

    chart.timeScale().fitContent()

    // addSeries(chart)

    const seriesArray = []
    if (type === 'baselineSeries')
      multiSeries.forEach((item) => {
        const newSeries = chart.addBaselineSeries()
        newSeries.setData(item.dataframe as LineData[])
        seriesArray.push(newSeries)
      })
    else
      multiSeries.forEach((item) => {
        const { dataframe, color } = item
        const newSeries = chart.addLineSeries({ color })
        newSeries.setData(dataframe as LineData[])
        seriesArray.push(newSeries)
      })

    // update tooltip
    // chart.subscribeClick((param) => {
    //   if (param.time) {
    //     multiSeries.forEach((element) => {
    //       const tes = element.dataframe.filter(
    //         (item) => item.time === param.time,
    //       )
    //       console.log(tes)
    //     })
    //   }
    // })
    chart.subscribeCrosshairMove((param) => {
      if (!tooltipRef.current) return
      if (
        // param.point === undefined ||
        !param.time ||
        // param.point.y < 0 ||
        // param.point.x < 0 ||
        seriesArray.length == 0
      ) {
        tooltipRef.current.style.display = 'none'
      } else {
        // const dateStr = param.time
        tooltipRef.current.style.display = 'block'
        tooltipRef.current.innerHTML = `<div>x: ${param.time}</div>`
        // let text = ''
        // for (let index = 0; index < seriesArray.length; index++) {
        //   const newSeries = seriesArray[index]
        //   const data = param.seriesData.get(newSeries)

        //   text += data.value
        // }
        // tooltipRef.current.innerHTML = `<div>1: ${text}</div>`

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
  }, [multiSeries])
  return (
    <div className={css.chartContainer}>
      <div>selected seaons</div>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          fontSize: '12px',
          gap: '15px',
        }}
      >
        {multiSeries.length >= 1 &&
          multiSeries.map((item) => (
            <li
              key={item.label}
              style={{ color: item.color, textTransform: 'lowercase' }}
            >
              {'- ' + item.label}
            </li>
          ))}
      </ul>
      <span
        style={{ fontSize: '12px', textAlign: 'right', marginBottom: '5px' }}
      >
        winrate
      </span>
      <div ref={chartContainerRef} className={css.chart} />
      <div
        ref={tooltipRef}
        style={{ position: 'absolute', inset: '0 0 0 0' }}
      />
      <span
        style={{ fontSize: '12px', marginTop: '10px', textAlign: 'center' }}
      >
        {multiSeries.length > 1 ? 'seasons' : 'date'}
      </span>
    </div>
  )
}

export default Chart
