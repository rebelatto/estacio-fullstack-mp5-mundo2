// Importar a biblioteca mongoose
import mongoose from 'mongoose';

const banco = mongoose;

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

banco.connect('mongodb://admin:!@admin@localhost:27017/livraria', options)
  .then(() => console.log('Conexão bem-sucedida com o MongoDB'))
  .catch((erro) => console.error('Erro na conexão com o MongoDB:', erro));

export default banco;
