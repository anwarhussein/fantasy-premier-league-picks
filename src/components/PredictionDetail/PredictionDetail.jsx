import React from 'react';
import './PredictionDetail.css'
import { Paper, Container, Grid } from '@mui/material';




function PredictionDetail({ fixture, handleSelect }) {

    return (

        <div >
            <Paper className= "paper-hover" style={{width: '40%', textAlign:'center', margin: 'auto'}} elevation={12}>
                <Container >
                <div className='fixture' key={fixture.id}>
                    {fixture.home_team}  VS  {fixture.away_team}
                </div>

                <br /> <br />
                <div>                
                    <select style={{marginLeft: '20px'}} className='select' onChange={(event) => handleSelect(event, fixture.id)}>
                        <option disabled selected>select team</option>
                        <option>{fixture.home_team}</option>
                        <option>{fixture.away_team}</option>

                    </select>
                </div>
                </Container>
            </Paper>
        </div >



    )
}

export default PredictionDetail