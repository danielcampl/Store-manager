const products = {
		name : "Traje de encolhimento",
	};
  const mockProduct = { id: 2, ...product };
const listOfProductMock = [mockProduct];
const productMock = {
  id: 1,
  name: "Martelo de Thor"
};

const productMockUpdated = {
  name: "Martelo de Pedro"
};

const errorProductMock = {
  id: 'a',
  name: 'pedro',
}

const qMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
]

module.exports = {
  listOfProductMock,
  products,
  mockProduct,
  productMock,
  errorProductMock,
  qMock,
  productMockUpdated,
  productMockToUpdate,
}