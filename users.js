-- Criação da tabela de usuários
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Inserção de um usuário de exemplo
INSERT INTO users (username, password) VALUES ('exemplo', 'senha');
