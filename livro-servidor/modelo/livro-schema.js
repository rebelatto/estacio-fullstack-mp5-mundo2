const mongoose = require('mongoose');
const banco = require('./conexao');

const LivroSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: false,
  },

  titulo: {
    type: String,
    required: true,
  },

  codEditora: {
    type: Number,
    required: true,
  },

  resumo: {
    type: String,
    required: true,
  },

  autor: {
    type: [String],
    required: true,
  },

});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
