// Importa o MySQL
const mysql = require('mysql2');
// Carrega as variáveis de ambiente
require('dotenv').config();

// Cria a conexão com base nos dados do .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Tenta conectar e mostra uma mensagem de sucesso ou erro
connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Banco de dados conectado com sucesso!');
});

// Exporta a conexão para ser usada em outros arquivos
module.exports = connection;
