// import { exampleData } from '@/dataWR'
import { useState } from "react";
import Main from "../../../components/Layout/Main";
import CrudMatch from "../../../components/modals/CrudMatch";
import CardCalendar from "./components/CardCalendar/CardCalendar";
import CardDetails from "./components/CardDetails/CardDetails";
import { getMatchByDate } from "../../../services/Match";

function HomePage() {
  // const random = Math.floor(Math.random() * 700)
  // console.log(random)
  const [currentMatch, setCurrentMatch] = useState(getMatchByDate(new Date()));
  const onSelectDate = (date) => {
    const match = getMatchByDate(date);
    setCurrentMatch(match);
  };

  return (
    <Main title="HOME">
      <CrudMatch data={currentMatch} />
      <CardCalendar onSelectDate={onSelectDate} data={currentMatch} />
      <CardDetails data={currentMatch} />
    </Main>
  );
}
export default HomePage;
