const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

// /products >>> /
router.get('/', productsController.index);

// /productos/checkout >>> /checkout
router.get('/checkout', productsController.checkout);

// /productos/:id >>> /:id
// /productos/1
// /productos/134
router.get('/:id', productsController.detail);

module.exports = router;
