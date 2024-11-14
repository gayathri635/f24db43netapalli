const Chocolate = require('../models/chocolate');

// List of all Chocolates
exports.chocolate_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Chocolate list');
};

// Detail for a specific Chocolate
exports.chocolate_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Chocolate detail: ' + req.params.id);
};

// Handle Chocolate create on POST
exports.chocolate_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Chocolate create POST');
};

// Handle Chocolate delete on DELETE
exports.chocolate_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Chocolate delete DELETE ' + req.params.id);
};

// Handle Chocolate update on PUT
exports.chocolate_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Chocolate update PUT ' + req.params.id);
};
