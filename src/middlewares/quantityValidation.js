module.exports = (req, res, next) => {
  const sales = req.body;
  const quantityReq = sales.every((sale) => sale.quantity <= 0);

  if (quantityReq) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  const quantityVerifier = sales.every((e) => e.quantity);
  
  if (!quantityVerifier) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
  // VALIDAÇAO DE QUANTIDADE DE ITEM
};