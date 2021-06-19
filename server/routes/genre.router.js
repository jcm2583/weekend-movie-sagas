const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log(req.params);
console.log('hello from the genre router');
  // res.sendStatus(500)
});

module.exports = router;