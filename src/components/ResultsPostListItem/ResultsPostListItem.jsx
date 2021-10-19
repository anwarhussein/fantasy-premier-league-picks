import React from 'react'
import { useDispatch } from 'react-redux';
import {useState} from 'react'

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
                    <select onChange={handleSelectTeam}>
                        <option>select team</option>
                        <option>{fixture.home_team}</option>
                        <option>{fixture.away_team}</option>
                    </select>
               

                    <button onClick={()=>handlePostResults(fixture.id)}>Add Results</button>




        </div >
    )
}

export default ResultsPostListItem
