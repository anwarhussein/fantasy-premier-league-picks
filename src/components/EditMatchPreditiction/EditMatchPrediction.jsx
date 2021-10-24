import useReduxStore from '../../hooks/useReduxStore';
import './EditMatchPrediction.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { Paper, Button, Container, Grid } from '@mui/material'
import moment from 'moment';

function EditMatchPrediction() {

    const store = useReduxStore();
    const dispatch = useDispatch()
    const history = useHistory()
    const [selectTeamPick, setSelectTeamPick] = useState('')
  


    const handleSelect = (event) => {
        setSelectTeamPick(event.target.value)
    }
    const handleSubmit = () => {

        dispatch({ type: 'MAKE_EDIT', payload: { id: store.setMatch.id, team: selectTeamPick } })

        history.push('/success')
    }
    return (
        <div>
           <Paper elevation={12}>
            < tr className="table">
                
                        <th>Date</th>

                        <th>Match</th>

                        <th>Pick</th>

                        </tr>  
            <tr>
            <td>
             {moment(store.setMatch.date).format('MM/DD/YYYY')}
            {/* {store.setMatch.date.substring(0,10)} */}
            </td>
            <td>
            {store.setMatch.home_team} vs {store.setMatch.away_team}
            </td>
            
           
            <select className="select" onChange={handleSelect}>
                <option>select team</option>
                <option>{store.setMatch.home_team}</option>
                <option>{store.setMatch.away_team}</option>

            </select>
           
           
           
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            </tr>

            </Paper>
        </div>
    )
}

export default EditMatchPrediction
