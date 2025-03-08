import Card from "../../../../../components/Card";
import MultipleSelect from "../../../../../components/MultipleSelect/MultipleSelect";
import SingleSelect from "../../../../../components/SingleSelect/SingleSelect";
import { FILTER_SEASONS, SEASONS, TIME_SCALE } from "../../../../../constants";
import LineChart from "./LineChart/LineChart";
import css from "./CardChart.module.css";

function CardChart() {
  return (
    <Card>
      <form action="">
        <SingleSelect
          name="filterMode"
          data={FILTER_SEASONS}
          valueSelected={FILTER_SEASONS[0].value}
        />
        <MultipleSelect data={SEASONS} title="seasons" />
      </form>
      <section className={css.chartContainer}>
        <LineChart className={css.chart} />
      </section>

      <form>
        <SingleSelect
          name="timeScale"
          data={TIME_SCALE}
          valueSelected={TIME_SCALE[0].value}
        />
      </form>
    </Card>
  );
}
export default CardChart;
