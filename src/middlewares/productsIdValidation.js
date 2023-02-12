module.exports = (req, res, next) => {
  const sales = req.body;
  const getProducstId = sales.every((sale) => sale.productId);

  if (!getProducstId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
  // VALIDAÇÃO DE IDS
};