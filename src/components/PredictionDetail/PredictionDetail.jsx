import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'


function PredictionDetail({fixture}) {

    const dispatch = useDispatch()

    dispatch({type: 'FETCH_DATE_FIXTURES', payload: fixture})

    return (
            <div key={fixture.id}>{fixture.home_team} vs     {fixture.away_team} {fixture.date}</div>
        
    )
}

export default PredictionDetail
