import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import PredictionDetail from '../PredictionDetail/PredictionDetail';
import { useState, useEffect } from 'react';

function Prediction() {

  const [searchDate, setSearchDate] = useState('')

  const dateFormat = (input) => {
    input = input.split("-");
    return input[2] + "-" + input[1] + "-" + input[0]
  }
  const store = useReduxStore();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_FIXTURES', })

  }, [])

  return (
    <div className="container">
      <h2>Start your prediction</h2>
      <input type="date" value={searchDate} onChange={(event) => setSearchDate(event.target.value)} />
      {store.setFixtures.map((fixture) => {
        return <PredictionDetail key={fixture.id} fixture={fixture} />


      })}

      <button>Submit</button>
    </div>
  );
}

export default Prediction;
