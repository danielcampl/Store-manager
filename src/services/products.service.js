const productsModel = require('../models/products.model');
const allValidations = require('./validations/allValidations');

// ESTE CAMPO CAPTURA DADOS MYSQL DO (PRODUCT.MODEL) RETORNANDO SE É ENCONTRADO OU NAO
const takeAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return { type: null, message: products };
};

const takeProductsById = async (productId) => {
  const result = await productsModel.getProductsById(productId);

  if (!result) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  return { type: null, message: result };
};

const takeProductsBySearch = async (search) => {
  const result = await productsModel.getAllProducts();
  
  const filteredProducts = await result.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()));
  
  return { type: null, message: filteredProducts };
};

const createProduct = async (productName) => {
  const error = allValidations.createdProductValidation(productName);

  if (error.type) {
    return error;
  }

  const result = await productsModel.insertProduct(productName);

  return { type: null, message: result };
};

const changeProduct = async (productId, productName) => {
  const error = allValidations.createdProductValidation(productName);

  if (error.type) {
    return error;
  }

  const product = await productsModel.getProductsById(productId);

  if (!product) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  } 

  const result = await productsModel.changeProduct(productId, productName);

  if (result) {
    return { type: null, message: { id: productId, name: productName } };
  }
};

const delProduct = async (id) => {
  const result = await productsModel.eraseProduct(id);

  if (result.affectedRows === 0) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  return { type: null, message: result };
};

module.exports = {
  takeAllProducts,
  takeProductsById,
  takeProductsBySearch,
  createProduct,
  changeProduct,
  delProduct,
};