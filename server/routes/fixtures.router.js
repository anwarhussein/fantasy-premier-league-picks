const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
//  */
// router.get('/', (req, res) => {
//   console.log(req.body)
//   const queryText = 'SELECT * FROM fixtures;';
//   pool.query(queryText)
//   .then((result) =>{
//     res.send(result.rows);
//   }).catch((err) =>{
//     console.log('Error in select fixtures query', err);
//     res.sendStatus(500);
//   })
// });

router.get('/:date', (req, res) => {
  const queryText = 'SELECT * FROM fixtures WHERE date=$1';
  pool.query(queryText, [req.params.date])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT date query', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const payload = req.body
  payload.map((pick) =>{
    console.log(pick)

  
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

module.exports = router;