// routes/livros.js
const express = require('express');
var  router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
  const novoLivro = req.body;

  try {
    const livroIncluido = await incluir(novoLivro);
    res.json({ mensagem: 'Livro incluído com sucesso!', livro: livroIncluido });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir um livro pelo ID
router.delete('/:id', async (req, res) => {
  const codigoLivro = req.params.id;

  try {
    await excluir(codigoLivro);
    res.json({ mensagem: 'Livro excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
