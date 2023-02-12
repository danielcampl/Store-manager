const connection = require('./connection');

// ESTE CAMPO SE RELACIONA COM O MYSQL, BUSCANDO O ACESSO EM TODA A SEED E FAZENDO A BUSCA (PRODUTOS)

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  
  return (result);
};

const getProductsById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );

  return result;
};

const getAllProductsIds = async () => {
  const [result] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );

  const ids = result.map((product) => product.id);

  return ids;
};

const insertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );

  const newProduct = {
    id: insertId,
    name,
  };

  return newProduct;
};

const changeProduct = async (id, name) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = ?',
    [name, id],
  );

  return result;
};

const eraseProduct = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return result;
};

module.exports = {
  getAllProducts,
  getProductsById,
  getAllProductsIds,
  insertProduct,
  changeProduct,
  eraseProduct,
};