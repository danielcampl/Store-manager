const Joi = require('joi');

// JOI (AULA COURSE)
const productSchema = Joi.string().min(5).required();
const saleSchema = Joi.object({
  productId: Joi.number().integer().min(1).required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = { productSchema, saleSchema };