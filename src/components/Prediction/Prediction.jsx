import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import PredictionDetail from '../PredictionDetail/PredictionDetail';
import { useState,useEffect } from 'react';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Prediction() {
  
  const [searchDate, setSearchDate] = useState('')
 

  const store = useReduxStore();

  // const [fixtures, setFixtures] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_FIXTURES', })

  }, [])

  return (
    <div className="container">
      <h2>Start your prediction</h2>
      <input type="date" value={searchDate} onChange={(event) => setSearchDate(event.target.value)} />

      {/* <button onClick={() => handleClick}>Go</button> */}

      {store.setFixtures.map((fixture) => {
        return <PredictionDetail key ={fixture.id}fixture={fixture} />

      })}


    </div>
  );
}

export default Prediction;
