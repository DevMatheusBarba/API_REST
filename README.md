<div align="center">
  <h1 style="font-size: 4rem; font-weight: bold;">
    ⚠️ API EM DESENVOLVIMENTO ⚠️
  </h1>
</div>

<p align="center">
  <strong>Uma API RESTful para gerenciamento escolar construída com Node.js, Express e Sequelize.</strong>
</p>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a> •
  <a href="#-como-executar">Como Executar</a> •
  <a href="#-endpoints-da-api">Endpoints</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-próximos-passos">Próximos Passos</a>
</p>

---

## 📖 Sobre o Projeto

Este projeto é uma API RESTful para gerenciamento escolar, construída com Node.js, Express e Sequelize. O sistema permite:

- Cadastro e gerenciamento de **Usuários** (CRUD completo)
- Início do cadastro de **Alunos** (estrutura pronta para CRUD)
- Autenticação via **JSON Web Token (JWT)**
- Rotas protegidas por autenticação
- Rota de login para geração de token
- Middleware para validação de token JWT

Funcionalidades implementadas:
- Cadastro, listagem, atualização e remoção de usuários
- Autenticação e geração de token JWT
- Proteção de rotas sensíveis (atualizar/deletar usuário)
- Estrutura para cadastro de alunos

A aplicação está sendo construída seguindo as melhores práticas de desenvolvimento, incluindo:

-   **Estrutura MVC (Model-View-Controller):** Para uma organização de código clara e de fácil manutenção.
-   **Validação de Dados:** Utilizando as capacidades do Sequelize para garantir a integridade dos dados antes de persistir no banco.
-   **Segurança:** Hashing de senhas com `bcryptjs` para proteger as informações dos usuários.
-   **Variáveis de Ambiente:** Uso de arquivos `.env` para gerenciar configurações sensíveis de forma segura.

---

## 🚀 Como Executar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

-   **Node.js** (versão 18 ou superior)
-   **NPM** ou **Yarn**
-   Um banco de dados relacional suportado pelo Sequelize (ex: **MariaDB**, **PostgreSQL**, **MySQL**).

### Passos para Instalação

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd API_REST
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
  -   Crie um novo arquivo chamado `.env` na raiz do projeto.
  -   Exemplo de configuração do arquivo `.env` (substitua pelos seus dados):

  ```env
  # Configurações do Banco de Dados
  DATABASE_HOST=localhost
  DATABASE_PORT=3306
  DATABASE_USERNAME=usuario_do_banco
  DATABASE_PASSWORD=senha_do_banco
  DATABASE=nome_do_banco

  # JWT
  TOKEN_SECRET=sua_chave_secreta
  TOKEN_EXPIRATION=7d
  ```

5.  **Execute as Migrations do Banco de Dados:**
    Este comando criará as tabelas `users` e `alunos` no seu banco de dados.
    ```bash
    npx sequelize db:migrate
    ```

6.  **Inicie o servidor:**
    -   Para modo de desenvolvimento com reinicialização automática (usando `nodemon`):
        ```bash
        npm run dev
        ```
    -   A API estará disponível em `http://localhost:3001`.

---

## ↔️ Endpoints da API

A API oferece:
- CRUD completo para **Usuários**
- Estrutura para CRUD de **Alunos**
- Autenticação JWT
- Rotas protegidas
- Rota de login/token

### Estrutura dos Endpoints

#### **Recurso: Usuários (`/users`)**
| Método   | Rota         | Descrição                        | Autenticação |
|----------|--------------|----------------------------------|--------------|
| `POST`   | `/users`     | Cria um novo usuário             | Não          |
| `GET`    | `/users`     | Lista todos os usuários          | Não          |
| `PUT`    | `/users`     | Atualiza o usuário autenticado   | **Sim** (JWT)|
| `DELETE` | `/users`     | Remove o usuário autenticado     | **Sim** (JWT)|

#### **Recurso: Login/Token (`/tokens`)**
| Método   | Rota         | Descrição                        |
|----------|--------------|----------------------------------|
| `POST`   | `/tokens`    | Realiza login e retorna o token  |

#### **Recurso: Alunos (`/`)**
| Método   | Rota         | Descrição                        |
|----------|--------------|----------------------------------|
| `GET`    | `/`          | Cria um aluno de exemplo         |

---

### Exemplos de Uso (cURL)

Use os comandos abaixo para interagir com a API. Substitua `:3001` pela porta correta, se necessário.

#### **1. Criar um Novo Usuário**

```bash
curl -X POST http://localhost:3001/users \
-H "Content-Type: application/json" \
-d '{
  "nome": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}'
```

#### **2. Listar Todos os Usuários**

```bash
curl -X GET http://localhost:3001/users
```

#### **3. Buscar um Usuário por ID**

*Substitua `1` pelo ID do usuário desejado.*

```bash
curl -X GET http://localhost:3001/users/1
```

#### **4. Atualizar um Usuário (autenticado)**
*Este endpoint exige um token JWT.*
```bash
curl -X PUT http://localhost:3001/users \
-H "Content-Type: application/json" \
-H "Authorization: Bearer SEU_TOKEN_JWT" \
-d '{
  "nome": "John Doe Updated",
  "email": "john.doe.updated@example.com"
}'
```

#### **5. Deletar um Usuário (autenticado)**
*Este endpoint exige um token JWT.*
```bash
curl -X DELETE http://localhost:3001/users \
```

#### **6. Login e obtenção de token JWT**
```bash
curl -X POST http://localhost:3001/tokens \
  "email": "john.doe@example.com",
  "password": "securepassword123"
}'
```

---

## 🛠️ Tecnologias

-   **Node.js**: Ambiente de execução JavaScript do lado do servidor.
-   **Express**: Framework web minimalista para criar APIs.
-   **Sequelize**: ORM (Object-Relational Mapper) para interagir com o banco de dados.
-   **bcryptjs**: Biblioteca para fazer o hash de senhas de forma segura.
-   **dotenv**: Módulo para carregar variáveis de ambiente a partir de um arquivo `.env`.
-   **Sucrase + Nodemon**: Para um ambiente de desenvolvimento produtivo com sintaxe moderna de JavaScript e hot-reloading.
-   **ESLint + Prettier**: Ferramentas para garantir a qualidade e a padronização do código.

---

## 📝 Próximos Passos

A API está em evolução. Próximos recursos planejados:
- [x] CRUD completo para **Usuários**
- [x] Autenticação JWT e rotas protegidas
- [x] Rota de login/token
- [ ] CRUD completo para **Alunos**
- [ ] Upload de fotos para alunos
- [ ] Testes automatizados
