const { expect } = require('chai');
const sinon = require('sinon');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');
const { products, newProduct } = require('../models/mocks/products.model.mock');


describe("Test products services", function () {
  it("Table all the products", async function () {
    sinon.stub(productsModel, "getAllProducts").resolves(products);
    const result = await productsService.takeAllProducts();
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(products);
  });

  it("List the sales by its ID", async function () {
    sinon.stub(productsModel, "getProductsById").resolves(products[0]);
    const result = await productsService.takeProductsById(1);
    expect(result.type).to.equal(null);
    expect(result.message).to.deep.equal(products[0]);
  });

  it("Create a new sale", async function () {
    sinon.stub(productsModel, "insertProduct").resolves(newProduct);
    const result = await productsService.createProduct(newProduct.name);
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(newProduct);
  });

  afterEach(function () {
    sinon.restore();
  });

  // it("Update a sale", async function () {
  //   sinon.stub(productsModel, "changeProduct").resolves(1);
  //   const result = await productsService.changeProduct(
  //     1,
  //     "change"
  //   );
  //   expect(result.type).to.be.equal(null);
  //   expect(result.message).to.be.deep.equal({
  //     id: 1,
  //     name: "change",
  //   });
  // });

  it("Delete a sale product by its ID", async function () {
    const affectedRows = 1;
    sinon.stub(productsModel, "eraseProduct").resolves(affectedRows);
    const result = await productsService.delProduct(1);
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(1);
  });
});