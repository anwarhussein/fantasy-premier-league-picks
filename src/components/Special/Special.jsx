import React from 'react'
import { useHistory } from 'react-router-dom'

function Special() {

    const history = useHistory();
    history.push('/special')



    return (
        <div className="special">
           <h1>Technologies:</h1>

            <h2>React, Redux,Sagas,Postgres sql, Matrial UI.</h2>
            <br /><br />
            <h1>Challenges:</h1>
              <h2>Api request limitations.</h2>
            <h1>Stretch goals:</h1>
                <h2>Expand: Baseball, Basketball, UFC etc</h2>

            <br /><br />

            <h1>Special thanks:</h1>
            <h2>Amazing Instructor: Chris Black.</h2>
            <h2>Great Support: Kris Szafranski </h2>
            <h2>Proth Cohort.</h2>
            <h2>Pass it over to Tou.</h2>
        </div>
    )
}

export default Special
