const erro = { NOT_FOUND: 404, INVALID_VALUE: 422 };
const mapError = (type) => erro[type] || 404;

module.exports = { erro, mapError };
