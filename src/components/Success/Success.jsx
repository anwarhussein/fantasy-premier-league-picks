import React from 'react'
import {useHistory} from 'react-router-dom'
import { Paper, Button, Container, Grid } from '@mui/material'



function Success() {
    const history = useHistory()

    const handleBack =() =>{
        history.push('/yours')
    }
    const handleStartPrediction =() =>{
        history.push('/info')

    }

    return (
        <div>
            <h4>Your Changes has been Saved!</h4>
            <Button variant="contained" onClick={handleBack}>Back to Edit</Button>
            <Button variant="contained" color="secondary" onClick={handleStartPrediction}>Start new Prediction</Button>
        </div>
    )
}

export default Success
