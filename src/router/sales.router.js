const express = require('express');
// const route = require('./index');
const salesController = require('../controllers/sales.controller');
const quantityValidation = require('../middlewares/quantityValidation');
const productsIdValidation = require('../middlewares/productsIdValidation');

const router = express.Router();

// router.get('/', route.salesController);
router.get('/', salesController.getAllSales);
router.post('/', productsIdValidation, quantityValidation, salesController.createSale);
router.get('/:id', salesController.getSalesById);
router.put('/:id', productsIdValidation, quantityValidation, salesController.updateSale);
router.delete('/:id', salesController.deleteSale);

module.exports = router;