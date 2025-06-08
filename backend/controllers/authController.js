// Importa a conexão com o banco de dados
const db = require('../db/connection');
// Importa o bcrypt para criptografar/verificar senhas
const bcrypt = require('bcryptjs');

// Função de cadastro
exports.register = (req, res) => {
  const { nome, email, senha } = req.body;

  // Criptografa a senha
  const hashed = bcrypt.hashSync(senha, 8);

  // Comando SQL para inserir no banco
  const sql = 'INSERT INTO Usuario (Nome, Email, Senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, hashed], (err) => {
    if (err) {
      console.error('Erro no cadastro:', err);
      return res.status(500).send('Erro ao cadastrar usuário.');
    }

    res.send('Usuário cadastrado com sucesso!');
  });
};

// Função de login
exports.login = (req, res) => {
  const { email, senha } = req.body;

  // Consulta SQL para encontrar o usuário pelo email
  const sql = 'SELECT * FROM Usuario WHERE Email = ?';
  db.query(sql, [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(401).send('Usuário não encontrado.');
    }

    // Recupera o usuário do resultado
    const user = results[0];

    // Verifica se a senha informada bate com a senha criptografada
    const isValid = bcrypt.compareSync(senha, user.Senha);

    if (!isValid) {
      return res.status(403).send('Senha incorreta.');
    }

    res.send('Login realizado com sucesso!');
  });
};
