const sales = [
  {
    saleId: 1,
    date: "2023-02-06T16:00:46.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2023-02-06T16:00:46.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2023-02-06T16:00:46.000Z",
    productId: 3,
    quantity: 15,
  },
];

const salesById = [
  {
    date: "2023-02-06T16:00:46.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-02-06T16:00:46.000Z",
    productId: 2,
    quantity: 10,
  },
];

const insertResults = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 2,
    },
  ],
};

const saleToBeInserted = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 2,
  },
];

const saleInserted = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 2,
    },
  ],
};

const saleInsertReturn = { id: 3, itemsSold: [ 1, 1 ] }

module.exports = {
  sales,
  salesById,
  insertResults,
  saleToBeInserted,
  saleInserted,
  saleInsertReturn,
};