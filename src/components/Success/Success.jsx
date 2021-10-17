import React from 'react'
import {useHistory} from 'react-router-dom'



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
            <button onClick={handleBack}>Back to Edit</button>
            <button onClick={handleStartPrediction}>Start new Prediction</button>
        </div>
    )
}

export default Success
