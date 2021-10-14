import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import PredictionDetail from '../PredictionDetail/PredictionDetail';
import { useState, useEffect } from 'react';

function Prediction() {

  const [searchDate, setSearchDate] = useState('')
  const [teamSelected, setTeamSelected] = useState('')

  const handlePostSelect = (event) => {
    const team = event.target.value
    dispatch({ type: 'ADD_WINNING_TEAM', payload: team })
    setTeamSelected(team)
  }

  const dispatch = useDispatch();

  const store = useReduxStore();

  const fixtureDates = (event) => {
    const newDate = event.target.value
    setSearchDate(newDate)

    dispatch({ type: 'FETCH_DATE_FIXTURE', payload: newDate });
  }

  return (

    <div className="container">
    
      <h2>Start your prediction</h2>
      <input type="date" value={searchDate} onChange={fixtureDates} />

      {store.selectedDate.map((fixture) => {
        return <PredictionDetail handlePostSelect={handlePostSelect} key={fixture.id} fixture={fixture} />
    


      })}

      <button>Next</button>
    </div>
    

  );
}

export default Prediction;
