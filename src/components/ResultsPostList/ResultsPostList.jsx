import { useDispatch } from 'react-redux';
import React, { useState } from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import ResultsPostListItem from '../ResultsPostListItem/ResultsPostListItem';
import Button from '@mui/material/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Container, Grid } from '@mui/material';




function ResultsPostList() {

    const dispatch = useDispatch();
    const [postDate, setPostDate] = useState('');
    const [showButton, setShowButton] = useState(false)
    const [selectTeam, setSelectTeam] = useState('')


    const store = useReduxStore();

    const handleSelect = (event) => {
        const newPostDate = event.target.value;
        setPostDate(newPostDate);


    }

    const handleSelectTeam = (event, fixtureId) => {
        const teamPick = event.target.value
        setSelectTeam([...selectTeam, { teamPick, fixtureId }])
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
                <label className="date" htmlFor="Date">Select Date:</label>
                <input type="date" value={postDate} onChange={handleSelect} />
                {showButton || <Button variant="contained" onClick={handleFetchfixtures}>View</Button>}
                <Paper elevation={12}>
                {showButton &&<Table>
                    <TableHead  className="heading">
                        <TableRow>
                            <TableCell><h2>Date</h2> </TableCell>
                            <TableCell><h2>Match</h2></TableCell>
                            <TableCell><h2>Pick</h2></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.setFixtures.map((fixture) => {

                            return <ResultsPostListItem key={fixture.id} allFixtures={store.setFixtures} fixture={fixture} className="table-center" />
                        })}
                    </TableBody>
                </Table>}
                </Paper>
               
            </div>

        </div >
    );

}

export default ResultsPostList;
