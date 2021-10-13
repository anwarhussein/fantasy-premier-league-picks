import { useDispatch, useSelector } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import PredictionDetail from '../PredictionDetail/PredictionDetail';
import { useState} from 'react';

function Prediction() {

  const [searchDate, setSearchDate] = useState('')

  const store = useReduxStore();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'FETCH_FIXTURES', })

  // }, [])

  const fixtureDates = (event) =>{
   const newDate= event.target.value
    setSearchDate(newDate)

    dispatch({type:'FETCH_DATE_FIXTURE',  payload: newDate});
  }

  return (
    <div className="container">
      <h2>Start your prediction</h2>
      <input type="date" value={searchDate} onChange={fixtureDates} />
      {store.selectedDate.map((fixture) => {
        return <PredictionDetail key ={fixture.id}fixture={fixture} />


      })}

      <button>Next</button>
    </div>
  );
}

export default Prediction;
