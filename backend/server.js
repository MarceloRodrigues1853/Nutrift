// Importa o framework Express
const express = require('express');

// Importa o middleware body-parser para lidar com JSON
const bodyParser = require('body-parser');

// Habilita o CORS para permitir requisições de outras origens
const cors = require('cors');

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Cria uma instância da aplicação Express
const app = express();

// Middleware para permitir CORS e receber JSON
app.use(cors());
app.use(bodyParser.json());

// Importa as rotas de autenticação
const authRoutes = require('./routes/auth');

// Usa as rotas na rota base /api
app.use('/api', authRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('🚀 Servidor rodando na porta 3000');
});
