import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Paper, Button, Container, Grid } from '@mui/material'
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Summary() {

    const dispatch = useDispatch();
    const history = useHistory();

    const store = useReduxStore();
    const [selectDate, setSelectDate] = useState('');
    const [showHeader, setShowHeader] = useState(false);
    const [showButton, setShowButton] = useState(true);


    const predictionDate = (event) => {
        event.preventDefault();
        const myDate = event.target.value

        setSelectDate(myDate)
    }

    const handleBack = () => {
        history.push('/info')
    }
    const handleSubmitDate = () => {

        if (selectDate === '') {
            alert('Please select you prediction date')
            return;
        }
        dispatch({ type: 'FETCH_PREDICTION', payload: selectDate })
        setShowHeader(!showHeader);
        setShowButton(!showButton);
    }

    const handleEditTeam = (match) => {

        dispatch({ type: 'EDIT_YOUR_TEAM', payload: match })

        history.push('/edit')
    }
    return (
        <div >

            <div className= "picks">
            <h2>Your picks has been Saved!</h2>
            <h4>Click on your selected date to view your picks </h4>
            </div>
            <Paper elevation={12} sx={{ m: 2 }}>
                Select Date:<input type="date" value={selectDate} onChange={predictionDate} />

                {showHeader && <Table className="table">

                    <TableHead>
                        <TableRow >
                            <TableCell>Date</TableCell>
                            <TableCell>Matches</TableCell>
                            <TableCell>Pick</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {store.setPrediction.map((game) => {
                            return <TableRow key={game.id}


                                className="active-row">
                                <TableCell>{moment(game.date).format('MM/DD/YYYY')}</TableCell>
                                <TableCell>{game.home_team} vs {game.away_team}</TableCell>
                                <TableCell>{game.winning_team}</TableCell>

                                <TableCell>
                                    <Button variant="contained" color="secondary" onClick={() => handleEditTeam(game)}>Edit</Button></TableCell>

                            </TableRow>
                        })}
                    </TableBody>
                </Table>}
                {showButton && <Button color="secondary" variant="contained" onClick={handleSubmitDate}>View</Button>}

                <Button onClick={handleBack} color="primary" variant="contained">Back</Button>
            </Paper>
        </div>
    )
}

export default Summary;
