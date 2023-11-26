require('dotenv').config();

const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

var options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};


var banco = mongoose.createConnection(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, options);


banco.on('error', (erro) => {
  console.error('Erro na conexão com o MongoDB:', erro);
});

banco.on('connected', () => {
  console.log('Conexão bem-sucedida com o MongoDB');
});

banco.on('disconnected', () => {
  console.log('Desconectado do MongoDB');
});


module.exports = banco;
