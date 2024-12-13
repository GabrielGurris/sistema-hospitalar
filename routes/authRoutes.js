const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
require('dotenv').config();

const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado!' });
    }

    // Verifica a senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: 'Senha inválida!' });
    }

    // Gera o token
    const token = jwt.sign(
      { id_usuario: usuario.id_usuario, tipo_usuario: usuario.tipo_usuario },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Erro no servidor ao fazer login' });
  }
});

module.exports = router;
