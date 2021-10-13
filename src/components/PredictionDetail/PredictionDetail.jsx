import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';



function PredictionDetail({ fixture }) {

    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch({ type: 'FETCH_DATE_FIXTURES', payload: fixture.date })
    }, [fixture.date])
     
    history.push('/yours');

    return (
        <>
        <div key={fixture.id}>{fixture.home_team} vs     {fixture.away_team} 
        <select>
            <option>{fixture.home_team}</option>
            <option>{fixture.away_team}</option>
        </select>
        </div>
     
        </>

    )
}

export default PredictionDetail
