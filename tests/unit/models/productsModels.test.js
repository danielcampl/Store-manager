const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const { products, newProduct } = require('../models/mocks/products.model.mock');

const connection = require('../../../src/models/connection');

describe('Test products model', function () {
  it('Table all the products', async function () {
    sinon.stub(connection, 'execute').resolves([products]);
    const result = await productsModel.getAllProducts();
    expect(result).to.be.deep.equal(products);
  });

  it('Grab a products by its ID', async function () {
    sinon.stub(connection, 'execute').resolves([[products[0]]]);
    const result = await productsModel.getProductsById(1);
    expect(result).to.be.deep.equal(products[0]);
  });

  it("Update n insert a new product", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: newProduct.id }]);
    const result = await productsModel.insertProduct(newProduct.name);
    expect(result).to.be.deep.equal(newProduct);
  });

  it("Delete a product by its ID", async function () {
    sinon.stub(connection, "execute").resolves([1]);
    const result = await productsModel.eraseProduct(1);
    expect(result).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});