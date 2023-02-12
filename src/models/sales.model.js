const connection = require('./connection');

// ESTE CAMPO SE RELACIONA COM O MYSQL, BUSCANDO O ACESSO EM TODA A SEED E FAZENDO A BUSCA (SALES)

const insertSales = async (sales) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  const toBeInserted = await Promise.all(
    sales.map(async (sale) => {
      await connection.execute(
        'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [insertId, sale.productId, sale.quantity],
      );

      return sale;
    }),
  );

  const newSale = { id: insertId, itemsSold: toBeInserted };

  return newSale;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id AS saleId,
    sales.date,
    product_id AS productId,
    quantity
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales AS sales ON StoreManager.sales_products.sale_id = sales.id`,
  );

  return result;
};

const getSalesById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT sales.date,
    product_id AS productId,
    quantity
    FROM StoreManager.sales_products
    INNER JOIN StoreManager.sales AS sales ON StoreManager.sales_products.sale_id = sales.id
    WHERE StoreManager.sales_products.sale_id = ?`,
    [saleId],
  );

  return result;
};

const eraseSale = async (saleId) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?', [saleId],
  );

  return result;
};

const changeSale = async (id, sales) => {
  const UpdatedSales = sales.map(async (sale) => {
    const result = await connection.execute(
      `UPDATE StoreManager.sales_products
      SET quantity = (?) WHERE sale_id = ? AND product_id = ?`,
      [sale.quantity, id, sale.productId],
    );

    return result;
  });

  const updated = { id, items: [] };

  await Promise.all(UpdatedSales).then((value) => {
    updated.items = value;
  });

  return updated;
};

module.exports = {
  insertSales,
  getAllSales,
  getSalesById,
  eraseSale,
  changeSale,
};