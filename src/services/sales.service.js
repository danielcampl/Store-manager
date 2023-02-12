const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');
const allValidations = require('./validations/allValidations');

// ESTE CAMPO CAPTURA DADOS MYSQL DO (SALES.MODEL) RETORNANDO SE É ENCONTRADO OU NAO
const saleIdVerification = async (sales) => {
  const ifSale = await Promise.all(
    sales.map(async (sale) => {
      const productId = await productsModel.getProductsById(sale.productId);

      if (!productId) {
        return false;
      }

      return true;
    }),
  );

  return ifSale;
};

const takeAllSales = async () => {
  const result = await salesModel.getAllSales();

  return { type: null, message: result };
};

const takeSalesById = async (id) => {
  const result = await salesModel.getSalesById(id);

  if (!result || result.length === 0) {
    return { type: 'NOT_FOUND', message: 'Sale not found' };
  }

  return { type: null, message: result };
};

const delSale = async (id) => {
  const result = await salesModel.eraseSale(id);

  if (result.affectedRows === 0) {
    return { type: 'NOT_FOUND', message: 'Sale not found' };
  }
  
  return { type: null, message: result };
};

const changeSale = async (id, sales) => {
  const ifSaleExists = await saleIdVerification(sales);

  if (ifSaleExists.some((sale) => sale === false)) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  const ifProductExists = await productsModel.getProductsById(id);

  if (!ifProductExists) return { type: 'NOT_FOUND', message: 'Sale not found' };
  await salesModel.changeSale(id, sales);

  return { type: null, message: { saleId: id, itemsUpdated: sales } };
};

const createSales = async (sales) => {
  const errorSales = sales.map((sale) => {
    const error = allValidations.createdSaleValidation(sale);

    if (error.type) return error;

    return '';
  });

  const invalid = errorSales.find((value) => value !== '');

  if (invalid) {
    return invalid;
  }

  const ids = await productsModel.getAllProductsIds();

  const match = sales.map((sale) => ids.includes(sale.productId));

  if (match.includes(false)) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  const result = await salesModel.insertSales(sales);
  result.itemsSold = sales;

  return { type: null, message: result };
};

module.exports = {
  takeAllSales,
  takeSalesById,
  createSales,
  delSale,
  changeSale,
};