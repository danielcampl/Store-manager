const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");
chai.use(sinonChai);
const salesService = require("../../../src/services/sales.service");
const salesController = require("../../../src/controllers/sales.controller");
const { sales, salesById, saleToBeInserted, saleInserted } = require('../models/mocks/sales.model.mock');

describe("Test all sales", function () {
  it("Lista todas as sales", async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "takeAllSales")
      .resolves({ type: null, message: sales });
    await salesController.getAllSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(sales);
  });

  it("List sales with specific ID", async function () {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "takeSalesById")
      .resolves({ type: null, message: salesById });
    await salesController.getSalesById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesById);
  });

  it("Create a new sale", async function () {
    const req = { body: saleToBeInserted };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "createSales").resolves({ type: null, message: saleInserted });
    await salesController.createSale(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(saleInserted);
  });

  it("Update a sale", async function () {
    const req = { body: saleToBeInserted, params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "changeSale").resolves({
      type: null,
      message: { saleId: 1, itemsUpdated: saleToBeInserted },
    });
    await salesController.updateSale(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({
      saleId: 1,
      itemsUpdated: saleToBeInserted,
    });
  });


  it("Delete sale by its ID", async function () {
    const req = { params: { id: 1 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "delSale").resolves({ type: null, message: 1 });
    await salesController.deleteSale(req, res);
    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith();
  });

  afterEach(function () {
    sinon.restore();
  });
});