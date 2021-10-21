import useReduxStore from '../../hooks/useReduxStore';
import './EditMatchPrediction.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { Paper, Button, Container, Grid } from '@mui/material'

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
           <Paper>
            <table class="table">
                <thead>

                    <tr>
                        <th>Date</th>

                        <th>Matches</th>

                        <th>Pick</th>

                    </tr>
                </thead>
            </table>
            {store.setMatch.date}

            {store.setMatch.home_team} vs {store.setMatch.away_team}
            <select className="select" onChange={handleSelect}>
                <option>select team</option>
                <option>{store.setMatch.home_team}</option>
                <option>{store.setMatch.away_team}</option>

            </select>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>

            </Paper>
        </div>
    )
}

export default EditMatchPrediction
