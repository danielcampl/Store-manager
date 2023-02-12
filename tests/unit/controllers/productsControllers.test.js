const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const { products, newProduct, updateProduct } = require('../models/mocks/products.model.mock');

describe('Test products controller functions', function () {
  it('Table all products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "takeAllProducts")
      .resolves({ type: null, message: products });

    await productsController.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('List product with specific ID', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'takeProductsById')
      .resolves({ type: null, message: products });

    await productsController.getProductsById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it("Create a new product", async function () {
    const req = { body: { name: "teste" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, "createProduct")
      .resolves({ type: null, message: newProduct });

    await productsController.createProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Update product', async function () {
    const req = { body: { name: "Martelo de Thor" }, params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'changeProduct')
      .resolves(updateProduct);

    await productsController.updateProduct(req, res);
    expect(res.status).calledWith(200);
    expect(res.json).calledWith(updateProduct.message);
  });

  afterEach(function () {
    sinon.restore();
  });
});