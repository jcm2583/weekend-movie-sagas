const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
console.log('hello from the router');
  // res.sendStatus(500)
});

module.exports = router;