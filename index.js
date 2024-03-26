// server.js
const express = require('express');
const sequelize = require('./database');
const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routes);

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado.');
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Erro ao sincronizar banco de dados:', error);
});