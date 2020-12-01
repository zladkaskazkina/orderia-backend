const publicRoutes = {
  //USER
  'POST /users': 'UserController.register',
  'POST /login': 'UserController.login',
  'POST /validate': 'UserController.validate',
  'GET /users': 'UserController.getAll',
  //Products
  'GET /products': 'ProductController.getAll',
  'GET /products/:id': 'ProductController.getProductById',
  'POST /products': 'ProductController.addProduct',
  //Orders
  'GET /orders': 'OrderController.getAll',
  'GET /orders/:id': 'OrderController.getOrderById',
  'POST /orders': 'OrderController.addOrder'
};

module.exports = publicRoutes;
