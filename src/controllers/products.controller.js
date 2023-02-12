const productsService = require('../services/products.service');
const errorMap = require('../utils/errorMap');

// ACESSO A TODOS OS PRODUTOS
const getAllProducts = async (_req, res) => {
  const { type, message } = await productsService.takeAllProducts();

  if (type) {
    return res.status(errorMap.mapError(type)).json(message);
  }

  res.status(200).json(message);
};

// ACESSO A UM UNICO PRODUTO DETERMINADO PELO ID
const getProductsById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.takeProductsById(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(200).json(message);
};

// ACESSO A UM UNICO PRODUTO DETERMINADO PELO NOME
const getProductBySearch = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.takeProductsBySearch(q);

  return res.status(200).json(message);
};

// CRIAÇÃO DE UM NOVO PRODUTO
const createProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(201).json(message);
};

// ATUALIZA E ADICIONA O NOVO PRODUTO AO PROGRAMA
const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.changeProduct(id, name);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(200).json(message);
}; 

// DELETA UM PRODUTO
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.delProduct(id);
  
  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(204).send();
};

module.exports = {
  getAllProducts,
  getProductsById,
  getProductBySearch,
  createProduct,
  updateProduct,
  deleteProduct,
};