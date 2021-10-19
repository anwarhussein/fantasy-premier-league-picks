const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    const queryText = `SELECT users.username, COUNT(fixtures.id) FROM fixtures JOIN predictions 
    ON predictions.winning_team = fixtures.winning_team JOIN users 
    ON users.id  = predictions.user_id GROUP BY  predictions.user_id, users.username`;
    pool.query(queryText)
    .then((result) =>{
      res.send(result.rows);
    }).catch((err) =>{
      console.log('Error in select fixtures query', err);
      res.sendStatus(500);
    })
  });






module.exports = router;