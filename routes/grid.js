const express = require('express');
const router = express.Router();

// GET grid display page
router.get('/', function(req, res) {
  let query = req.query;
  console.log(`rows ${query.rows}`);
  console.log(`cols ${query.cols}`);
  res.render('grid', { title: 'Grid Display', query: query });
});

module.exports = router; 

