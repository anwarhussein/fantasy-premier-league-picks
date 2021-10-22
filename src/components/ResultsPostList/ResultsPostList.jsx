import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import ResultsPostListItem from '../ResultsPostListItem/ResultsPostListItem';
import Button from '@mui/material/Button';



function ResultsPostList() {

    const dispatch = useDispatch();
    const [postDate, setPostDate] = useState('');
    const [showButton, setShowButton] = useState(false)
    const [selectTeam, setSelectTeam] = useState('')
   
    // const [selectedId, setSelectedId] = useState(0)
    



    const store = useReduxStore();

    const handleSelect = (event) => {
        const newPostDate = event.target.value;
        setPostDate(newPostDate);


    }

    const handleSelectTeam = (event, fixtureId) => {
        const teamPick = event.target.value
        setSelectTeam([...selectTeam, {teamPick,fixtureId}])
        //console.log(selectedId);
    }

    // const handlePostResults = (id) => {
    //     dispatch({ type: 'ADD_RESULTS', payload: { id: id, selectTeam: selectTeam } })
    // }

    const handleFetchfixtures = () => {
        
        dispatch({ type: 'FETCH_FIXTURES', payload: postDate })
        setShowButton(!showButton);
      
    }

    
    return (
        <div>
            <div id="center-box">

            Date: <input type="date" value={postDate} onChange={handleSelect} />
            <tr>
                <th>Date</th>
                <th>Match</th>
                <th>Pick</th>
            </tr>
            {store.setFixtures.map((fixture) => {
                return <div><ResultsPostListItem key={fixture.id} allFixtures={store.setFixtures} fixture={fixture} className="table-center" />

                    {/* <tr style={{textAlign: "center"}}>

                        <td> {fixture.date}</td>
                        <td>{fixture.home_team} Vs {fixture.away_team}</td>
                        <select className="select" onChange={handleSelectTeam}>
                            <option>select team</option>
                            <option>{fixture.home_team}</option>
                            <option>{fixture.away_team}</option>
                        </select>

                    </tr> */}
                    </div>

            })}
            {/* {JSON.stringify(store.setFixtures)} */}

            {showButton || <Button variant="contained" onClick={handleFetchfixtures}>Submit</Button>}
                        <br /><br />
            {/* <Button color="secondary" variant="contained" onClick={() => handlePostResults}>Add </Button> */}
            </div>

        </div >
    );

}

export default ResultsPostList;
