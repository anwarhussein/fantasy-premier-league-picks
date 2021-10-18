import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import PredictionDetail from '../PredictionDetail/PredictionDetail';
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'


function Prediction() {
  
  const history = useHistory();
  const dispatch = useDispatch();

  const store = useReduxStore();

  const [searchDate, setSearchDate] = useState('')
  const [prediction, setPrediction] = useState([])

  const handleSelect = (event, fixtureId ) => {
 
    const teamPick= event.target.value
    const pick =[...prediction,{teamPick, fixtureId}]
   
    setPrediction(pick)
    console.log(pick);
  }

  const handlePostTeam = () =>{
    dispatch({ type: 'ADD_WINNING_TEAM', payload: prediction })
    console.log(prediction);
    history.push('/yours')

  }

  const fixtureDates = (event) => {
    const newDate = event.target.value
    setSearchDate(newDate)

    dispatch({ type: 'FETCH_DATE_FIXTURE', payload: newDate });
  } 


  return (

    <div className="container">
    
      <h2>Start your prediction</h2>
      <h4>Please remember the date you select, you'll need it later if you choose to make changes.</h4>
      Select Date<input type="date" value={searchDate} onChange={fixtureDates} />

      {store.selectedDate.map((fixture) => {
        return <PredictionDetail handleSelect={handleSelect}
        
        key={fixture.id} fixture={fixture} />
    


      })}
    

      <button onClick={handlePostTeam}>Save Your Prediction</button>
    
    </div>
    

  );
}

export default Prediction;
