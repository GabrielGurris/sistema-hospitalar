const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// Rota para listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Rota para criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.json(novoUsuario);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = router;
