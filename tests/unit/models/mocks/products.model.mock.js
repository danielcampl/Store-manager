const products = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
  {
    id: 3,
    name: "Escudo do Capitão América"
  }
];

const newProduct = {
  id: 10,
  name: "mouse",
};

const updateProduct = {
  type: null, message: { id: '1', name: 'Martelo do Thor' }
};

module.exports = {
  products,
  newProduct,
  updateProduct,
};