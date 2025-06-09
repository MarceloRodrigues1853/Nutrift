
# Projeto Integrador E-commerce Nutrifit

## Desenvolvimento

**🛠️ Modelagem do `DER`(Diagrama Entidade eRelacionamento)**

- Modelar o `DER` com pelo menos `4 entidades`.

- Estabelecer relacionamentosentre as `entidades`.

- Adicionar `atributos` às `entidades`.

**🎲 Criação das Tabelas na `3FN` em um Banco de Dados**

- Utilizar um sistema de gerenciamento de banco de dados (ex: `MySQL, PostgreSQL`).
  
- Criar `tabelas` correspondentes às `entidades` identificadas no `DER`.

- Normalizar as tabelas até a terceira forma normal (`3FN`).

📊 **Realização de Consultas Simples**

- Realizar `consultas básicas`, se possível, juntando tabelas.

## Organização

🌐 **GitHub**

- Criar um `repositório` no `GitHub` para o projeto.

- Organizar o código em estrutura de pastas lógicas.

📊 **Uso de Recursos de Apresentação**

- Criar slides apresentando o projeto.

- Incluir informações sobre a empresa,funcionalidades, DER e exemplos de `consultas SQL`.

- Preparar `demonstrações práticas` do uso do aplicativo, se possível.

💻 **Uso do SQL**

- Demonstrar o uso efetivo do SQL no projeto.

- Incluir exemplos de `consultas complexas`, atualizações e `inserções de dados`.

## Informações da Loja

🏠 **Home**

- Introdução sobre a empresa.

- Produtos em destaque.

- Categorias de produtos.

- Call-to-action (CTA) para explorar os produtos.

🏋️ **Funil 1 - Perda de Peso**

- Landing page com informações sobre o suplemento para perda de peso.

- Dicas de treinos específicos.

- Links para blogs relacionados.

💪 **Funil 2 - Ganho de Massa**

- Landing page com informações sobre o suplemento para ganho de massa muscular.

- Dicas de treinos específicos.

- Links para blogs relacionados.

📞 **Contato**

- Página de contato com formulário para envio de mensagens.

- Links para redes sociais.

📝 **Cadastro de Usuário**

- Página para cadastro de usuários.

- Campos para informações como nome, e-mail, senha, etc.

🛒 **Carrinho de Compras**

- Página para armazenar informações dos produtos selecionados.

- Adição e remoção de produtos.

- Informações de pagamento.

## 🚀 Passo a Passo para o Desenvolvimento do Projeto Integrador E-commerce NutriFit

1. **🖌️ Modelagem do DER (Diagrama Entidade e Relacionamento)**

- Identificar as entidades principais, por exemplo: `Usuário, Produto, Pedido, Categoria.`

- Adicionar atributos às entidades, por exemplo, a `entidade Usuário` pode ter atributos como `Nome, E-mail, Senha, etc.`

2. **🛠️ Criação das Tabelas na 3FN em um Banco de Dados**

- Utilizar um sistema de gerenciamento de banco de dados (ex: `MySQL, PostgreSQL`).

- Criar as `tabelas` correspondentes às `entidades` identificadas no `DER`.

- Normalizar as tabelas até a `terceira forma normal` (3FN) para evitar `redundâncias` e garantir `integridade`.

3. 📊 **Consultas Simples no Banco de Dados**

- Realizar `consultas básicas`, como `selecionar` todos os produtos de uma determinada `categoria`.

- Explorar operações SQL como SELECT, WHERE, JOIN para buscar informações.
  
4. 🌐 **Organização no Github**

- Criar um `repositório` no GitHub para o projeto.

- Organizar o `código` em estrutura de pastas lógicas (ex: modelos, views, controllers).

- Utilizar commits significativos para documentar alterações.

5. 📊 **Recursos de Apresentação**

- Criar documentos apresentando o projeto.

- Incluir `informações sobre a empresa`, funcionalidades, `DER`, e `exemplos de consultas SQL`.

- Preparar `demonstrações práticas` do uso do aplicativo, se possível.

6. 💻 **Uso do SQL**

- Demonstrar o uso efetivo do `SQL` no projeto.

- Incluir exemplos de consultas complexas, atualizações e inserções de dados.

7. 🧪 **Testes e Ajustes**

- Realizar testes nas funcionalidades do site.

- Corrigir bugs e ajustar o código conforme necessário.

- Hospedar o banco de dados em um servidor, se necessário.

- Publicar o site, utilizando serviços como Netlify, Vercel,GitHub pages ou AWS.

- Garantir que o aplicativo esteja acessível online.

## 🛠️ Modelo DER (Diagrama Entidade - Relacionamento)

### Entidades Principais

**Usuário:**

- Atributos:
  - ID (identificador único)
  - Nome
  - E-mail
  - Senha
  - Endereço, etc.

**Produto:**

- Atributos:
  - ID
  - Nome
  - Descrição
  - Preço
  - Imagem, etc.

**Pedido:**

- Atributos:
  - ID
  - Data do Pedido
  - Status
  - Total, etc.

**Categoria:**

- Atributos:
  - ID
  - Nome
  - Descrição, etc.

## Relacionamentos Entre Entidades

**Relacionamento entre `Usuário` e `Pedido`**

- Um `Usuário` pode fazer `vários Pedidos`.

- Um `Pedido` pertence a um `único Usuário`.

- **Tipo de Relacionamento:** 1 para Muitos (`1:N`).

**Relacionamento entre `Produto` e `Pedido`**

- Um `Produto` pode estar em `vários Pedidos`.

- Um `Pedido` pode ter `vários Produtos`.

- **Tipo de Relacionamento:** Muitos para Muitos (`M:N`).

- Pode ser necessário uma tabela associativa (`Pedido_Produto`) para lidar com a relação `muitos para muitos`.

**Relacionamento entre `Produto` e `Categoria`**

- Um `Produto` pode pertencer a `uma Categoria`.

- Uma `Categoria` pode ter `vários Produtos`.

**Tipo de Relacionamento:** Muitos para Um (`M:1`).

## Adição de Atributos às Entidades

**Atributos Adicionais para a `Entidade Usuário`**

- Data de Registro

- Telefone

- Data de Nascimento, etc.

**Atributos Adicionais para a `Entidade Produto`**

- Quantidade em Estoque

- Peso

- Dimensões, etc.

**Atributos Adicionais para a `Entidade Pedido`**

- Método de Pagamento

- Endereço de Entrega, etc.

**Atributos Adicionais para a `Entidade Categoria`**

- Nenhum atributo adicional mencionado. Pode incluir descrição, data de criação, etc., se necessário.

## Schema DER

``````d
// Use DBML to define your database structure
// Docs: <https://dbml.dbdiagram.io/docs>

Table Usuario {
  ID int [pk]
  Nome string
  Email string
  Senha string
  Endereco string
  DataRegistro datetime
  Telefone string
  DataNascimento date
}

Table Produto {
  ID int [pk]
  Nome string
  Descricao string
  Preco decimal
  Imagem string
  QuantidadeEstoque int
  Peso decimal
  Dimensoes string
}

Table Pedido {
  ID int [pk]
  DataPedido datetime
  Status string
  Total decimal
  MetodoPagamento string
  EnderecoEntrega string
  Usuario_ID int
}

Ref: Pedido.Usuario_ID > Usuario.ID

Table Categoria {
  ID int [pk]
  Nome string
  Descricao string
}

Table Pedido_Produto {
  ID int [pk]
  Quantidade int
  Pedido_ID int
  Produto_ID int
}

Ref: Pedido_Produto.Pedido_ID > Pedido.ID
Ref: Pedido_Produto.Produto_ID > Produto.ID

Table Categoria_Produto {
  ID int [pk]
  Categoria_ID int
  Produto_ID int
}

Ref: Categoria_Produto.Categoria_ID > Categoria.ID
Ref: Categoria_Produto.Produto_ID > Produto.ID
``````

**imagem do DER**
![Alt text](https://lh7-us.googleusercontent.com/GFawpQgTuoVlcbLqo6GiSIVQEu94t7oykx8_1XKXJArU0H-3vfWyd_gsTc4r2vPujQTqbfx0h_o4OR-lyGn_oLHhHLhvvYVB28mIokuudgqGn5wWIFglPQtpL9YO6NuyEQlp1L0VYGcuj3_PLcK_K14)

**link para DBML**
<https://dbdiagram.io/d/Projeto-Integrador-E-commerce-NutriFit-6579e89b56d8064ca0f8bffd>

## Criação das Tabelas no Banco de Dados (Exemplo para PostgreSQL)

````sql
-- Tabela de Usuário
CREATE TABLE Usuario (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  Nome VARCHAR,                 -- Nome do usuário
  Email VARCHAR,                -- Endereço de e-mail do usuário
  Senha VARCHAR,                -- Senha do usuário
  Endereco VARCHAR,             -- Endereço do usuário
  DataRegistro TIMESTAMP,       -- Data de registro do usuário
  Telefone VARCHAR,             -- Número de telefone do usuário
  DataNascimento DATE           -- Data de nascimento do usuário
);

-- Tabela de Produto
CREATE TABLE Produto (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  Nome VARCHAR,                 -- Nome do produto
  Descricao VARCHAR,            -- Descrição do produto
  Preco DECIMAL,                -- Preço do produto
  Imagem VARCHAR,               -- URL da imagem do produto
  QuantidadeEstoque INT,        -- Quantidade em estoque do produto
  Peso DECIMAL,                 -- Peso do produto
  Dimensoes VARCHAR              -- Dimensões do produto
);

-- Tabela de Pedido
CREATE TABLE Pedido (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  DataPedido TIMESTAMP,         -- Data do pedido
  Status VARCHAR,               -- Status do pedido
  Total DECIMAL,                -- Total do pedido
  MetodoPagamento VARCHAR,      -- Método de pagamento
  EnderecoEntrega VARCHAR,      -- Endereço de entrega
  Usuario_ID INT,               -- Referência ao Usuário que fez o pedido
  FOREIGN KEY (Usuario_ID) REFERENCES Usuario (ID)  -- Chave estrangeira para a tabela de Usuário
);

-- Tabela de Categoria
CREATE TABLE Categoria (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  Nome VARCHAR,                 -- Nome da categoria
  Descricao VARCHAR              -- Descrição da categoria
);

-- Tabela Associativa Pedido_Produto
CREATE TABLE Pedido_Produto (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  Quantidade INT,               -- Quantidade do produto no pedido
  Pedido_ID INT,                -- Referência ao Pedido
  Produto_ID INT,               -- Referência ao Produto
  FOREIGN KEY (Pedido_ID) REFERENCES Pedido (ID),    -- Chave estrangeira para a tabela de Pedido
  FOREIGN KEY (Produto_ID) REFERENCES Produto (ID)   -- Chave estrangeira para a tabela de Produto
);

-- Tabela Associativa Categoria_Produto
CREATE TABLE Categoria_Produto (
  ID SERIAL PRIMARY KEY,        -- Identificador único e autoincrementado
  Categoria_ID INT,             -- Referência à Categoria
  Produto_ID INT,               -- Referência ao Produto
  FOREIGN KEY (Categoria_ID) REFERENCES Categoria (ID),  -- Chave estrangeira para a tabela de Categoria
  FOREIGN KEY (Produto_ID) REFERENCES Produto (ID)       -- Chave estrangeira para a tabela de Produto
);
````

## Inserção de Dados nas Tabelas (Exemplo para PostgreSQL)

````sql
-- Inserir Usuários de Exemplo
INSERT INTO Usuario (Nome, Email, Senha, Endereco, DataRegistro, Telefone, DataNascimento)
VALUES 
  ('Maria Oliveira', 'maria@email.com', 'senha456', 'Av. B, 456', NOW(), '987654321', '1985-03-15'),
  ('Carlos Santos', 'carlos@email.com', 'senha789', 'Rua C, 789', NOW(), '555123456', '1978-08-22'),
  ('Ana Souza', 'ana@email.com', 'senhaabc', 'Rua D, 789', NOW(), '555987654', '1995-05-10'),
  ('Pedro Lima', 'pedro@email.com', 'senhadef', 'Av. E, 123', NOW(), '111222333', '1980-11-30'),
  ('Juliana Alves', 'juliana@email.com', 'senha456', 'Rua F, 789', NOW(), '333444555', '1992-09-25');

-- Inserir Produtos de Exemplo
INSERT INTO Produto (Nome, Descricao, Preco, Imagem, QuantidadeEstoque, Peso, Dimensoes)
VALUES 
  ('Barra de Proteína', 'Lanche saudável', 2.99, 'url_barra_proteina', 200, 0.2, '5x5x15'),
  ('Multivitamínico', 'Vitaminas essenciais', 29.99, 'url_multivitaminico', 50, 0.1, '3x3x8'),
  ('Shake de Proteína', 'Bebida nutritiva', 19.99, 'url_shake_proteina', 150, 1.0, '8x8x18'),
  ('Creatina Monoidratada', 'Suplemento para ganho de massa', 39.99, 'url_creatina', 80, 0.5, '7x7x15'),
  ('Barras de Cereal', 'Lanche rápido e saudável', 3.49, 'url_barras_cereal', 120, 0.3, '4x4x12');

-- Inserir Pedidos de Exemplo
INSERT INTO Pedido (DataPedido, Status, Total, MetodoPagamento, EnderecoEntrega, Usuario_ID)
VALUES 
  (NOW(), 'Enviado', 29.99, 'Boleto Bancário', 'Av. B, 456', 2),
  (NOW(), 'Entregue', 52.98, 'PayPal', 'Rua C, 789', 3),
  (NOW(), 'Em Processamento', 37.47, 'Cartão de Crédito', 'Rua D, 789', 4),
  (NOW(), 'Concluído', 15.97, 'Pix', 'Av. E, 123', 5),
  (NOW(), 'Pendente', 23.75, 'Transferência Bancária', 'Rua F, 789', 1);
  (NOW(), 'Em Processamento', 49.99, 'Cartão de Crédito', 'Rua A, 123', 1),
  (NOW(), 'Enviado', 29.99, 'Boleto Bancário', 'Rua B, 456', 2),
  (NOW(), 'Entregue', 69.98, 'PayPal', 'Rua C, 789', 3)
  
-- Inserir Categoria de Exemplo
INSERT INTO Categoria (Nome, Descricao)
VALUES
  ('Vitaminas', 'Suplementos vitamínicos'),
  ('Proteínas', 'Suplementos proteicos'),
  ('Energéticos', 'Suplementos energéticos'),
  ('Acessórios', 'Equipamentos e acessórios para treino'),
  ('Emagrecimento', 'Produtos voltados para emagrecimento');


-- Inserir Itens nos Pedidos (Tabela Pedido_Produto)
-- Esta instrução insere itens nos pedidos criados anteriormente na tabela Pedido_Produto.
-- Cada linha representa um produto associado a um pedido, indicando a quantidade.
INSERT INTO Pedido_Produto (Quantidade, Pedido_ID, Produto_ID)
VALUES 
  (2, 1, 1),  -- 2 unidades do Produto com ID 1 no Pedido com ID 1
  (1, 2, 2),  -- 1 unidade do Produto com ID 2 no Pedido com ID 2
  (3, 3, 3);  -- 3 unidades do Produto com ID 3 no Pedido com ID 3
  

-- Inserir dados na tabela Categoria_Produto
INSERT INTO Categoria_Produto (Categoria_ID, Produto_ID) VALUES
  (1, 1),  -- Produto 1 pertence à Categoria 1
  (1, 2),  -- Produto 2 pertence à Categoria 1
  (2, 2),  -- Produto 2 pertence à Categoria 2
  (2, 3),  -- Produto 3 pertence à Categoria 2
  (3, 1);  -- Produto 1 pertence à Categoria 3
````

## Realizar Consultas Básicas no Banco de Dados (Exemplos)

````sql
-- Selecionar todos os usuários:
SELECT * FROM Usuario;

-- Selecionar todos os produtos:
SELECT * FROM Produto;

-- Selecionar todos os pedidos:
SELECT * FROM Pedido;

-- Selecionar todas as categorias:
SELECT * FROM Categoria;

-- Selecionar todas as pepedido_produto:
SELECT * FROM pedido_produto;

-- Selecionar todas as catpedido_produto:
SELECT * FROM categoria_produto;

-- Obter os detalhes de um pedido específico:
SELECT *
FROM Pedido
WHERE ID = 1;

-- Listar todos os usuários que fizeram pedidos:
SELECT DISTINCT Usuario.*
FROM Usuario
INNER JOIN Pedido ON Usuario.ID = Pedido.Usuario_ID;

-- Selecionar todos os usuários e a quantidade de pedidos associados a cada um:
-- Esta consulta retorna uma lista de usuários com a quantidade de pedidos associados a cada um.
SELECT
  Usuario.ID as Usuario_ID,
  Usuario.Nome as Nome_Usuario,
  COUNT(Pedido.ID) as Quantidade_Pedidos
FROM Usuario
LEFT JOIN Pedido ON Usuario.ID = Pedido.Usuario_ID
GROUP BY Usuario.ID, Usuario.Nome;

-- Selecionar todos os produtos de uma determinada categoria:
SELECT Produto.Nome, Produto.Descricao, Produto.Preco
FROM Produto
JOIN Categoria_Produto ON Produto.ID = Categoria_Produto.Produto_ID
WHERE Categoria_Produto.Categoria_ID = 1;

-- Selecionar todos os Produtos e a Quantidade em Estoque:
-- Esta consulta retorna informações sobre todos os produtos, incluindo o nome e a quantidade em estoque.
SELECT
  Produto.ID as Produto_ID,
  Produto.Nome as Nome_Produto,
  Produto.QuantidadeEstoque as Quantidade_Estoque
FROM Produto;

-- Selecionar todos os Pedidos e os produtos associados a cada um:
-- Esta consulta retorna detalhes de todos os pedidos, incluindo os produtos associados e a quantidade de cada produto no pedido.
SELECT
  Pedido.ID as Pedido_ID,
  Produto.Nome as Nome_Produto,
  Pedido_Produto.Quantidade
FROM Pedido
JOIN Pedido_Produto ON Pedido.ID = Pedido_Produto.Pedido_ID
JOIN Produto ON Pedido_Produto.Produto_ID = Produto.ID;

-- Esta consulta retorna detalhes de pedidos, incluindo informações sobre o usuário que fez o pedido,
-- os produtos associados e a quantidade de cada produto.
SELECT
  Pedido.ID as Pedido_ID,          -- ID do Pedido
  Usuario.Nome as Nome_Usuario,    -- Nome do usuário que fez o pedido
  Produto.Nome as Nome_Produto,    -- Nome do produto associado ao pedido
  Pedido_Produto.Quantidade,       -- Quantidade do produto no pedido
  Pedido.Status                    -- Status do pedido
FROM Pedido
JOIN Usuario ON Pedido.Usuario_ID = Usuario.ID              -- Junta a tabela Pedido com a tabela Usuario usando a chave estrangeira Usuario_ID
JOIN Pedido_Produto ON Pedido.ID = Pedido_Produto.Pedido_ID  -- Junta a tabela Pedido com a tabela Pedido_Produto usando a chave primária e estrangeira
JOIN Produto ON Pedido_Produto.Produto_ID = Produto.ID      -- Junta a tabela Pedido_Produto com a tabela Produto usando a chave primária e estrangeira
````
