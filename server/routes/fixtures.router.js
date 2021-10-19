const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
//  */
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM fixtures;';
  pool.query(queryText)
  .then((result) =>{
    res.send(result.rows);
  }).catch((err) =>{
    console.log('Error in select fixtures query', err);
    res.sendStatus(500);
  })
});

router.get('/:date', (req, res) => {
  const queryText = 'SELECT * FROM fixtures WHERE date=$1';
  pool.query(queryText, [req.params.date])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT date query', err);
      res.sendStatus(500);
    });
});


router.put('/:id', (req, res) =>{
      
  console.log("This the id", req.params.id)
  console.log("this is the team i wanna edit", req.body.team.selectTeam)
  const queryText = `UPDATE fixtures SET winning_team = $1 where fixtures.id = $2;`
  pool.query(queryText, [ req.body.team.selectTeam, req.params.id])
  .then(() =>{
    res.sendStatus(200);
  }).catch((err) =>{
      res.sendStatus('Error updating team selection', err)
  })
})
  


module.exports = router;