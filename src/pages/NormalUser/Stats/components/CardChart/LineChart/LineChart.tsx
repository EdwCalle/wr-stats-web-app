import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { exampleData } from "../../../../../../dataWR";
export const ChartComponent = (props) => {
  const {
    data,
    className,
    colors: {
      backgroundColor = "transparent",
      lineColor = "rgba( 239, 83, 80, 1)",
      textColor = "white",
      areaTopColor = "rgba( 239, 83, 80, 0.05)",
      areaBottomColor = "rgba( 239, 83, 80, 0.28)",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: "solid", color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      grid: {
        vertLines: { visible: false },
        horzLines: { visible: false },
      },
    });
    chart.timeScale().fitContent();
    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.priceScale().applyOptions({
      borderColor: backgroundColor,
    });

    newSeries.setData(data);

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div className={className} ref={chartContainerRef} />;
};
function LineChart(props) {
  const dataWR = exampleData.map((value) => ({
    time: value.date,
    value: value.acumDiff,
  }));
  return (
    <>
      <ChartComponent {...props} data={dataWR}></ChartComponent>
    </>
  );
}
export default LineChart;
