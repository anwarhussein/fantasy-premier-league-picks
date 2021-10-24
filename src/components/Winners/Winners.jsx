import React, { useEffect } from 'react'
import useReduxStore from '../../hooks/useReduxStore';
import { useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Container, Grid } from '@mui/material';


function Winners() {

    const dispatch = useDispatch()

    const store = useReduxStore();
    useEffect(() => {

        dispatch({ type: 'FETCH_FIXTURES_WINNERS' })
    }, [dispatch])


    return (
        <div>
            <h2> Winners so far</h2>
            <Paper elevation={20}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><h2>Name </h2></TableCell>
                        <TableCell><h2>Points</h2></TableCell>
                     
                    </TableRow>
                </TableHead>
                <TableBody>
                    {store.setWinners.map((user) => {
                        return <TableRow>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.count}</TableCell>

                        </TableRow>
                    })}
                </TableBody>
            </Table>
            </Paper>


            {/* 
            <table>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Points
                    </th>
                </tr>
            </table>
            {store.setWinners.map((user) => {
                return <table>
                    <tbody>
                        <tr>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.count}
                            </td>
                        </tr>
                    </tbody>
                </table>
            })} */}

        </div>
    )
}

export default Winners
