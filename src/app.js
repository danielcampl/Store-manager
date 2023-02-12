const express = require('express');

const productsRouter = require('./router/products.router');
const salesRouter = require('./router/sales.router');

const app = express();
app.use(express.json());

// ROTA
  // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
    // GET - Pega uma info
    // POST - Cria uma info
    // PUT - Altera toda info
    // PATCH - Altera parte da info
    // DELETE - Apaga uma info

// Name - Um identificador da rota

// Function (Callback)

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
  // ".send()" - Utilização para uma string
  // ".send({ somador: soma })" - Utilização de string + valores que me traz um resultado em json no navegador
  // ".json()" - Utilização para valores numéricos
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

// Eventualmente apagar //
// const port = 3000;
// app.listen(3000,
//  () => console.log(`App listening on port ${port}`));

module.exports = app;

// PROJETO REALIZADO E CONFIGURADO COM A AJUDA DO [TRYBE] POETA E THIAGO LOPES, FIXAÇAO DE ERROS DO DOCKER E MYSQL.
// SEM ELES EU NÃO ESTARIA ENTREGANDO ESSE PROJETO, DEIXO AQUI MINHA MENSAGEM DE AGRADECIMENTO!!! S2