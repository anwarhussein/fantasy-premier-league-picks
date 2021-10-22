import React from 'react'
import { useDispatch } from 'react-redux';
import { useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import { Paper, Container, Grid } from '@mui/material'
import './Resuts.css'

const ResultsPostListItem = ({ fixture,allFixtures }) => {


    const [selectTeam, setSelectTeam] = useState('')

    const [localAllFixtures, setLocalAllFixtures] = useState()
    const dispatch = useDispatch();


    const handlePostResults = (id) => {
        dispatch({ type: 'ADD_RESULTS', payload: { id: id, selectTeam: selectTeam } })

    }

    const handleSelectTeam = (event) => {
        const teamPick = event.target.value
        const teamId= event.target.id
        console.log(teamId);
        setSelectTeam(teamPick)
    

     

    }

    useEffect(() =>{
        setLocalAllFixtures(allFixtures)
        console.log(allFixtures);
       
    },[])

    return (

        <div key={fixture.id}>
            {/* <tr>
                <th>Date</th>
                <th>Match</th>
                <th>Pick</th>
               
            </tr> */}
            <tr style={{ textAlign: "center" }}>

                <td> {fixture.date}</td>
                <td>{fixture.home_team} Vs {fixture.away_team}</td>
                <select id={fixture.id} className="select" onChange={handleSelectTeam}>
                    <option>select team</option>
                    <option>{fixture.home_team}</option>
                    <option>{fixture.away_team}</option>
                </select>
                <Button color="secondary" variant="contained" onClick={() => handlePostResults(fixture.id)}>Add </Button>

            </tr>

            
        </div>

    )
}

export default ResultsPostListItem
