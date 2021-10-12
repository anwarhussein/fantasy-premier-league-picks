import React,{useState, useEffect} from 'react';
import  { useDispatch, useSelector } from 'react-redux'; 
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Prediction() {
  const [dateValue, setDateValue] = useState(null);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch({type:'FETCH_FIXTURES', payload:dateValue})

  },[])
  return (
    <div className="container">
      <h2>Start your prediction</h2>
      <input type="date" value={dateValue} onChange={(event) =>setDateValue(event.target.value)}/>

       

    </div>
  );
}

export default Prediction;
