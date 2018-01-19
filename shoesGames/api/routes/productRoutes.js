'use strict';
module.exports = function(app) {
  var product = require('../controllers/productController');

  // product Routes
  app.route('/tasks')
    .get(product.list_all_tasks)
    .post(product.create_a_task);


  app.route('/tasks/:taskId')
    .get(product.read_a_task)
    .put(product.update_a_task)
    .delete(product.delete_a_task);
};