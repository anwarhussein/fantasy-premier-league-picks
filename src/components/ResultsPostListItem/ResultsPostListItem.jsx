import React from 'react'
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import Button from '@mui/material/Button';
import './Resuts.css'

const ResultsPostListItem = ({fixture}) => {


    const [selectTeam, setSelectTeam] = useState('')
    const dispatch = useDispatch();

    const handlePostResults = (id) => {
        dispatch({ type: 'ADD_RESULTS', payload: { id: id, selectTeam: selectTeam } })

    }

    
    const handleSelectTeam = (event) => {
        const teamPick = event.target.value
        setSelectTeam(teamPick)
    }

    return (
        <div key={fixture.id}>{fixture.date}{fixture.home_team} Vs {fixture.away_team}
                    <select className="select" onChange={handleSelectTeam}>
                        <option>select team</option>
                        <option>{fixture.home_team}</option>
                        <option>{fixture.away_team}</option>
                    </select>
               

                    <Button color="secondary" variant="contained" onClick={()=>handlePostResults(fixture.id)}>Add Results</Button>


     

        </div >
    )
}

export default ResultsPostListItem
