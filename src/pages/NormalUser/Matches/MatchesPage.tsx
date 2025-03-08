import Card from "../../../components/Card";
import Main from "../../../components/Layout/Main";
import { exampleData } from "../../../dataWR";
import Table from "./MatchTable/MatchTable";

const HEADER_MATCHS = [
  "id",
  "date",
  "victories",
  "defeats",
  "total_matchs",
  "diff",
  "acumDiff",
  "playedTime",
  "range",
  "points",
];

function MatchesPage() {
  return (
    <Main title="SHEETS" isFullSize={true}>
      <Card>
        <Table header={HEADER_MATCHS} data={exampleData.splice(10, 20)} />
      </Card>
    </Main>
  );
}
export default MatchesPage;
