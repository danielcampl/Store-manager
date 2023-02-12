const app = require('./app');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
app.listen(process.env.PORT, async () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});

// PROJETO REALIZADO E CONFIGURADO COM A AJUDA DO [TRYBE] POETA E THIAGO LOPES, FIXAÇAO DE ERROS DO DOCKER E MYSQL.
// SEM ELES EU NÃO ESTARIA ENTREGANDO ESSE PROJETO, DEIXO AQUI MINHA MENSAGEM DE AGRADECIMENTO!!! S2