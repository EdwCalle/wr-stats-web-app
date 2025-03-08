import Modal from "./Modal";
import Form from "../Form";
import { useEffect, useState } from "react";
import CounterBox from "../Counter/CounterBox";

function CrudMatch({ data }) {
  const [newMatch, setnewMatch] = useState(data);
  useEffect(() => {
    setnewMatch(data);
  }, [data]);
  // const newMatch = data
  // const rankedTier = getRange(data)
  const onChangeCounter = (victories, defeats) => {
    const match = { ...newMatch };
    match.victories = victories;
    match.defeats = defeats;
    setnewMatch(match);
    console.log(match);
  };

  return (
    <Modal id={"crudMatch"}>
      <Form>
        {/* <fieldset>
          <legend>Match info</legend>
          <h3>Season 14</h3>
          <span>12/12/2024</span>
        </fieldset> */}
        <fieldset>
          <legend>
            from date: <strong>{newMatch.date}</strong>
          </legend>
          <h3>Season FILL</h3>
          <CounterBox updateMatch={onChangeCounter} data={newMatch} />
          {/* <Range isRangeForm={true} data={rankedTier}>
            <label>
              <select defaultValue={'DEFAULT'} name='tier'>
                <option value='DEFAULT' disabled>
                  Tier
                </option>
                {TIER.map((value, i) => (
                  <option key={i} value={i}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <select defaultValue={'DEFAULT'} name='division'>
                <option value='DEFAULT' disabled>
                  Division
                </option>
                {DIVISION.map((value, i) => (
                  <option key={i} value={i}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <input
                type='number'
                name='marks'
                placeholder='marks'
                value={rankedTier.marks}
              />
            </label>
          </Range> */}
          <button>Save Match</button>
        </fieldset>
      </Form>
    </Modal>
  );
}
export default CrudMatch;
