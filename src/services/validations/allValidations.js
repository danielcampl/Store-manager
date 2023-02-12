const { productSchema, saleSchema } = require('./schemas');

const createdProductValidation = (name) => {
  const { error } = productSchema.validate(name);

  // VALIDAÇÕES TYPE MESSAGE / 5 CARAC
  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: '"name" length must be at least 5 characters long',
    };
  }

  return { type: null, message: '' };
};

const createdSaleValidation = (sale) => {
  const { error } = saleSchema.validate(sale);

  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }

  return { type: null, message: '' };
};

module.exports = { createdProductValidation, createdSaleValidation };