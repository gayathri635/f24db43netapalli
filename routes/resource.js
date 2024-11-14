const express = require('express');
const router = express.Router();
const api_controller = require('../controllers/api');
const chocolate_controller = require('../controllers/chocolate');

// API base route
router.get('/', api_controller.api);

// Chocolate routes
router.post('/chocolates', chocolate_controller.chocolate_create_post);
router.delete('/chocolates/:id', chocolate_controller.chocolate_delete);
router.put('/chocolates/:id', chocolate_controller.chocolate_update_put);
router.get('/chocolates/:id', chocolate_controller.chocolate_detail);
router.get('/chocolates', chocolate_controller.chocolate_list);

module.exports = router;
