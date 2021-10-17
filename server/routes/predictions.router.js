const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:date', (req, res) => {
    // console.log(req.params.date)
    const queryText = `

    SELECT users.id, fixtures.date, fixtures.home_team,fixtures.away_team,predictions.winning_team FROM fixtures 
    JOIN predictions ON predictions.fixture_id = fixtures.id 
    JOIN users ON predictions.user_id = users.id WHERE users.id =$1 AND fixtures.date = $2`;
    pool.query(queryText,[req.user.id, req.params.date])
    .then((result) =>{
      res.send(result.rows);
    }).catch((err) =>{
      console.log('Error in select predictions query', err);
      res.sendStatus(500);
    })
  });

  router.post('/', (req, res) => {
    // POST route code here
    const payload = req.body
    payload.map((pick) =>{
      // console.log(pick)
  
    const queryText = `INSERT INTO predictions ("user_id","fixture_id","winning_team") VALUES ($1, $2,$3);`;
    pool.query(queryText, [req.user.id, pick.fixtureId,pick.teamPick])
  
    .then((response) =>{
      res.sendStatus(201); 
    
    }).catch((error) =>{
      console.log("Error posting to Database", error);
      res.sendStatus(500);
    })
  })
    
  });

  router.put('/:matchID', (req, res) =>{
      
      console.log("This the id", req.params.matchID)
      console.log("this is the team i wanna edit", req.body.team.team)
      const queryText = `UPDATE predictions SET winning_team = $1 where fixture_id = $2;`
      pool.query(queryText, [ req.body.team.team, req.params.matchID])
      .then(() =>{
        res.sendStatus(200);
      }).catch((err) =>{
          res.sendStatus('Error updating team selection', err)
      })
  })
      
  
  


  module.exports = router;