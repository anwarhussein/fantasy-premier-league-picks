import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import {useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


function Summary() {

    const dispatch = useDispatch();
    const history = useHistory();

    const store = useReduxStore();
    const [selectDate, setSelectDate] = useState('');
    const [showHeader, setShowHeader] = useState(false);
    const [showButton, setShowButton] = useState(true);

    
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
        setShowHeader(!showHeader);
        setShowButton(!showButton);
    }
        
    const handleEditTeam = (match) => {
       
        dispatch({ type: 'EDIT_YOUR_TEAM', payload:match  })
     
        history.push('/edit')
    }
    return (
        <div>
            <p>Your picks has been Saved!</p>
            <h4>Click on your selected date to view your picks </h4>
            Select Date:<input type="date" value={selectDate} onChange={predictionDate} />
            {showHeader && <table>
            <thead>
              <tr>
                        <th>Date</th>

                        <th>Matches</th>

                        <th>Pick</th>
                    </tr>
                </thead>
            </table>}
            {store.setPrediction.map((game) => {
                return <table key={game.id}>

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

            {showButton &&<button onClick={handleSubmitDate}>Submit</button>}
            
        </div>
    )
}

export default Summary;
