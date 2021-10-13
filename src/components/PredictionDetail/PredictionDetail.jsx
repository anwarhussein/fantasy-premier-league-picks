import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'


function PredictionDetail({fixture}) {
        
    

    return (
            <div key={fixture.id}>{fixture.home_team}  VS  {fixture.away_team}
            <select>
                <option>pick your team</option>
                <option>{fixture.home_team}</option>
                <option>{fixture.away_team}</option>

            </select>
            
            </div> 
    )
}

export default PredictionDetail