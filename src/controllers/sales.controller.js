const salesService = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

// ACESSO A TODAS AS VENDAS
const getAllSales = async (_req, res) => {
  const { message } = await salesService.takeAllSales();

  return res.status(200).json(message);
};

// ACESSO AS VENDAS POR DETERMINADO ID
const getSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.takeSalesById(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(200).json(message);
};

// CRIA UMA NOVA VENDA
const createSale = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.createSales(sales);

  if (type) {
    return res.status(404).json({ message });
  }

  return res.status(201).json(message);
};

// ATUALIZA E ADICIONA UMA NOVA VENDA
const updateSale = async (req, res) => {
  const sales = req.body;
  const { id } = req.params;

  const { type, message } = await salesService.changeSale(id, sales);
  
  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(200).json(message);
};

// DELETA UMA VENDA
const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.delSale(id);

  if (type) {
    return res.status(errorMap.mapError(type)).json({ message });
  }

  return res.status(204).json();
};

module.exports = {
  getAllSales,
  getSalesById,
  createSale,
  updateSale,
  deleteSale,
};