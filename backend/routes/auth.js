// Importa o Express
const express = require('express');

// Cria um roteador separado
const router = express.Router();

// Importa o controller que contém a lógica do cadastro/login
const authController = require('../controllers/authController');

// Rota POST para cadastro de usuário
router.post('/register', authController.register);

// Rota POST para login de usuário
router.post('/login', authController.login);

// Exporta as rotas
module.exports = router;
