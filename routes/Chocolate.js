// chocolate.js
const express = require('express');
const router = express.Router();

// GET chocolate search results page
router.get('/', function(req, res) {
  res.render('Chocolate', { title: 'Search Results - Chocolate' });
});

module.exports = router;

