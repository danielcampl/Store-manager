const { expect } = require("chai");
const sinon = require("sinon");
const salesModel = require('../../../src/models/sales.model');
const connection = require("../../../src/models/connection");

const { sales,
  salesById,
  saleToBeInserted,
} = require('../models/mocks/sales.model.mock');

describe("Test sales model", function () {
  it("Table all the sales", async function () {
    sinon.stub(connection, "execute").resolves([sales]);
    const result = await salesModel.getAllSales();
    expect(result).to.be.deep.equal(sales);
  });

  it("Grab a sale by its ID", async function () {
    sinon.stub(connection, "execute").resolves([salesById]);
    const result = await salesModel.getSalesById(1);
    expect(result).to.be.deep.equal(salesById);
  });

  it("Update n insert a new sale", async function () {
    sinon.stub(connection, "execute").resolves([sales]);
    const result = await salesModel.insertSales(saleToBeInserted);

    expect(result).to.be.equal(result);
  });

  it("Delete a sale by its ID", async function () {
    sinon.stub(connection, "execute").resolves([1]);
    const result = await salesModel.eraseSale(1);
    expect(result).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });

});