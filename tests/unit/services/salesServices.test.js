const { expect } = require("chai");
const sinon = require("sinon");
const productsModel = require('../../../src/models/products.model');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');
const { sales, salesById, insertResults, saleToBeInserted } = require('../models/mocks/sales.model.mock');

describe("Test sales services", function () {
  it("table all the sales", async function () {
    sinon.stub(salesModel, "getAllSales").resolves(sales);
    const result = await salesService.takeAllSales();
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(sales);
  });

  it("List the sales by its ID", async function () {
    sinon.stub(salesModel, "getSalesById").resolves(salesById);
    const result = await salesService.takeSalesById(1);
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(salesById);
  });

  it("Create a new sale", async function () {
    sinon.stub(productsModel, "getAllProductsIds").resolves([1, 2, 3]);
    sinon.stub(salesModel, "insertSales").resolves(insertResults);
    const result = await salesService.createSales(saleToBeInserted);
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(insertResults);
  });

  it("Delete a sale product by its ID", async function () {
    const affectedRows = 1;
    sinon.stub(salesModel, "eraseSale").resolves(affectedRows);
    const result = await salesService.delSale(1);
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});