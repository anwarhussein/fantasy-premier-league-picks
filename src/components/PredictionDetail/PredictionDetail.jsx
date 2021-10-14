import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'


function PredictionDetail({ fixture, handlePostSelect}) {
  

    //   useEffect(() => {
    //     dispatch({ type: 'FETCH_DATE_FIXTURE', })

    //   }, [])


    return (
        
        <div key={fixture.id}>{fixture.home_team}  VS  {fixture.away_team}
        
            
     <select onChange={handlePostSelect}>
          <option>select team</option>
          <option>{fixture.home_team}</option>
          <option>{fixture.away_team}</option>  

    </select>

        </div>

         
          
    )
}

export default PredictionDetail