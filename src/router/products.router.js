const express = require('express');
// const route = require('./index');
const productsController = require('../controllers/products.controller');
const validateProductsFields = require('../middlewares/productsValidation');

const router = express.Router();

// router.get('/', route.productsController);
router.get('/', productsController.getAllProducts);
router.post('/', validateProductsFields, productsController.createProduct);
router.get('/search', productsController.getProductBySearch);
router.get('/:id', productsController.getProductsById);
router.put('/:id', validateProductsFields, productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;