import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useReduxStore from '../../hooks/useReduxStore';

function ResultsPost() {

    const dispatch = useDispatch();
    const [postDate, setPostDate] = useState('');
    const [selectTeam, setSelectTeam] = useState('')

    const store = useReduxStore();

    const handleSelect = (event) => {
        const newPostDate = event.target.value;
        setPostDate(newPostDate);

        dispatch({ type: 'FETCH_FIXTURES', payload: newPostDate })

    }

    const handleSelectTeam = (event) => {
        const newTeam = event.target.value
        setSelectTeam(newTeam)
    }

    const handlePostResults = () =>{
        dispatch({type:'ADD_RESULTS', payload: newTeam})

    }

    return (
        <div>

            Date:<input type="date" value={postDate} onChange={handleSelect} />
            {store.setFixtures.map((fixture) => {
            return <div key={fixture.id}>{fixture.date}{fixture.home_team} vs {fixture.away_team}
              <select onChange={handleSelectTeam}>
                <option>select team</option>
                <option>{fixture.home_team}</option>
                <option>{fixture.away_team}</option>

            </select>
            <button onClick={handlePostResults}>Add Results</button>
            </div>
            })}



            {/* {JSON.stringify(store.setFixtures)} */}

        </div>
    )
}

export default ResultsPost
