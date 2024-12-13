const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use('/usuarios', usuarioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
