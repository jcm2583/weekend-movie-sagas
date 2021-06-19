const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log(req.params);
  // create a query text variable to declare what data you want from databasd

  // const queryText = `SELECT "title", "poster", "description" FROM "movies"
  // WHERE "id" = $1`;

  const queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, 
  string_agg("genres".name, ', ') AS genre FROM "movies"
  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
  JOIN "genres" ON "genres".id = "movies_genres".genre_id        
  WHERE "movies".id = $1
  GROUP BY 1;`

  //send request to database
  pool.query(queryText, [req.params.id])
  .then( result => {
    res.send(result.rows);
  }).catch (err => {
    console.log('Error in server side GET route', err);
    res.sendStatus(500);
  })
// console.log('hello from the genre router');
  // res.sendStatus(500)
});

module.exports = router;