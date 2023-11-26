
import { Schema, model } from './conexao.js';

const LivroSchema = new Schema({
  titulo: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  anoPublicacao: {
    type: Number,
    required: true,
  },

});

export default model('Livro', LivroSchema);
