import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import {useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Paper, Button, Container, Grid } from '@mui/material'


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
    
       setSelectDate(myDate)
    } 
    
    const handleBack =() =>{
        history.push('/info')
    }
    const handleSubmitDate = () =>{

        if(selectDate === ''){
            alert('Please select you prediction date')
            return;
        }
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
            <Paper elevation={12} sx={{m:2}}>
            Select Date:<input type="date" value={selectDate} onChange={predictionDate} />
           
            {showHeader && <tr className="table">

             
                        <th>Date</th>
                        <th>Matches</th>
                        <th>Pick</th>
                        <th>Action</th>
                    </tr>
              
        }
          
            {store.setPrediction.map((game) => {
                return <tr key={game.id}

                   
                         className="active-row">
                            <td>{game.date}</td>
                            <td>{game.home_team} vs {game.away_team}</td>
                            <td>{game.winning_team}</td>

                            <td><Button variant="contained" color="secondary" onClick={() => handleEditTeam(game)}>Edit</Button></td>
                        
                   

                </tr>
              
            })}
            

            {showButton &&<Button color="secondary" variant="contained" onClick={handleSubmitDate}>View</Button>}

            <Button onClick={handleBack}color="primary" variant="contained">Back</Button>
           
            </Paper>
        </div>
    )
}

export default Summary;
