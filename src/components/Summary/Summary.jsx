import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


function Summary() {

    const dispatch = useDispatch();
    const history = useHistory();

    const store = useReduxStore();
    const [selectDate, setSelectDate] = useState('');
    const [team, setSelectTeam] = useState('')

    
    const predictionDate = (event) => {
        event.preventDefault();
        const myDate =event.target.value
        // if(myDate ===undefined){
        //     return;
        // }
       setSelectDate(myDate)
  

    }   
    const handleSubmitDate = (event) =>{
        dispatch({ type: 'FETCH_PREDICTION', payload: selectDate })

    }
        
    const handleEditTeam = (match) => {
       
        dispatch({ type: 'EDIT_YOUR_TEAM', payload:match  })
     
        history.push('/info')
    }
    return (
        <div>
            <h2>Your Picks for the Week</h2>
            <input type="date" value={selectDate} onChange={predictionDate} />
            {/* {JSON.stringify(store.setPrediction)} */}
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Matches</th>

                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            {store.setPrediction.map((game) => {
                return <table key={game}>

                    <tbody>
                        <tr>
                            <td>{game.date}</td>
                            <td>{game.home_team} vs {game.away_team}</td>
                            <td>{game.winning_team}</td>

                            <td><button onClick={() => handleEditTeam(game)}>Edit</button></td>
                        </tr>
                    </tbody>
                </table>

            })}

            <button onClick={handleSubmitDate}>Submit</button>
            
        </div>
    )
}

export default Summary;
