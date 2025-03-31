import { ColorType, createChart } from 'lightweight-charts'
import { useEffect, useRef } from 'react'
type ChartComponentProps = {
  data: { time: string; value: number }[]
  className: string
  colors?: {
    backgroundColor?: string
    lineColor?: string
    textColor?: string
    areaTopColor?: string
    areaBottomColor?: string
  }
}
export const ChartComponent = (props: ChartComponentProps) => {
  const {
    data,
    className,
    colors: {
      backgroundColor = 'transparent',
      lineColor = 'rgba( 239, 83, 80, 1)',
      textColor = 'white',
      areaTopColor = 'rgba( 239, 83, 80, 0.05)',
      areaBottomColor = 'rgba( 239, 83, 80, 0.28)',
    } = {},
  } = props

  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartContainerRef.current) return
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current?.clientWidth ?? 0,
      height: chartContainerRef.current?.clientHeight ?? 0,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
    })
    chart.timeScale().fitContent()
    const newSeries = chart.addBaselineSeries({
      baseValue: { type: 'price', price: 0 },
      topLineColor: 'rgba(76, 175, 80, 1)', // Green color
      topFillColor1: 'rgba(76, 175, 80, 0.05)', // Light green
      topFillColor2: 'rgba(76, 175, 80, 0.28)', // Semi-transparent green
      bottomLineColor: 'rgba(239, 83, 80, 1)', // Red color
      bottomFillColor1: 'rgba(239, 83, 80, 0.28)', // Semi-transparent red
      bottomFillColor2: 'rgba(239, 83, 80, 0.05)', // Light red
    })
    newSeries.priceScale().applyOptions({
      borderColor: backgroundColor,
    })

    newSeries.setData(data)

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth ?? 0,
        height: chartContainerRef.current?.clientHeight ?? 0,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      chart.remove()
    }
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ])

  return <div className={className} ref={chartContainerRef} />
}

function LineChart(props: ChartComponentProps) {
  return (
    <>
      <ChartComponent {...props}></ChartComponent>
    </>
  )
}
export default LineChart
