import React,{useState, useEffect} from 'react';
import  { useDispatch, useSelector } from 'react-redux'; 
import useReduxStore from '../../hooks/useReduxStore';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Prediction() {
  
  const store = useReduxStore();
  
 // const [fixtures, setFixtures] = useState([]);
  const dispatch = useDispatch();
 
  useEffect(() =>{
    dispatch({type:'FETCH_FIXTURES'})

  },[])
  
  return (
    <div className="container">
      <h2>Start your prediction</h2>
      {/* <input type="date" value={dateValue} onChange={(event) =>setDateValue(event.target.value)}/> */}
      
      {store.setFixtures.map((fixture) =>{
        return <li key={fixture.id}>{fixture.home_team} vs {fixture.away_team} </li>

      })}
     
    </div>
  );
}

export default Prediction;
