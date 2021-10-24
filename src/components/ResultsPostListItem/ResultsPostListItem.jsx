import React from 'react'
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Paper, Container, Grid } from '@mui/material'
import './Resuts.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';

const ResultsPostListItem = ({ fixture, allFixtures }) => {


    const [selectTeam, setSelectTeam] = useState('')
    const [addName, setAddName] = useState(true);

    // const [localAllFixtures, setLocalAllFixtures] = useState()
     const dispatch = useDispatch();


    const handlePostResults = (id) => {
        dispatch({ type: 'ADD_RESULTS', payload: { id: id, selectTeam: selectTeam } })
        setAddName(!addName);


    }

    const handleSelectTeam = (event) => {
        const teamPick = event.target.value
        const teamId = event.target.id
        console.log(teamId);
        setSelectTeam(teamPick)

    }

    // useEffect(() => {
    //     setLocalAllFixtures(allFixtures)
    //     console.log(allFixtures);

    // }, [])

    return (

        <>

            <TableRow style={{ textAlign: "center" }}>

                <TableCell> {moment(fixture.date).format('MM/DD/YYYY')}</TableCell>
                <TableCell>{fixture.home_team} Vs {fixture.away_team}</TableCell>
                <TableCell><select id={fixture.id} className="select" onChange={handleSelectTeam}>
                    <option>select team</option>
                    <option>{fixture.home_team}</option>
                    <option>{fixture.away_team}</option>
                </select>
                    <Button color="secondary" variant="contained" onClick={() => handlePostResults(fixture.id)}>{addName? 'Add': 'Done!'}</Button>
                </TableCell>
            </TableRow>

        </>

    )
}

export default ResultsPostListItem
