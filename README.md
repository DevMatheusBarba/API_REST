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

Este projeto é uma API RESTful desenvolvida como parte de um estudo aprofundado sobre a construção de back-ends robustos e escaláveis utilizando o ecossistema Node.js. O objetivo é criar um sistema de gerenciamento para uma instituição de ensino, com funcionalidades para cadastrar e gerenciar **Alunos** e **Usuários** do sistema.

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
    -   Crie uma cópia do arquivo `.env.example` (se houver) ou crie um novo arquivo chamado `.env` na raiz do projeto.
    -   Preencha o arquivo `.env` com as credenciais do seu banco de dados e as configurações da aplicação:

    ```env
    # Configurações do Banco de Dados
    DATABASE_HOST=localhost
    DATABASE_PORT=3306
    DATABASE_USERNAME=seu_usuario_do_banco
    DATABASE_PASSWORD=sua_senha_do_banco
    DATABASE=nome_do_banco_de_dados

    # Configurações da Aplicação
    APP_URL=http://localhost:3001
    APP_PORT=3001
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

A API oferece um CRUD completo para gerenciar **Usuários** e, futuramente, **Alunos**.

### Estrutura dos Endpoints

A seguir, uma visão geral dos endpoints disponíveis.

#### **Recurso: Usuários (`/users`)**

| Método | Rota          | Descrição                        | Autenticação |
| :----- | :------------ | :--------------------------------- | :----------- |
| `POST` | `/users`      | Cria um novo usuário.              | Não          |
| `GET`  | `/users`      | Lista todos os usuários.           | Não          |
| `GET`  | `/users/:id`  | Busca um usuário pelo ID.          | Não          |
| `PUT`  | `/users/:id`  | Atualiza um usuário existente.     | **Sim** (JWT)  |
| `DELETE`| `/users/:id`  | Remove um usuário.                 | **Sim** (JWT)  |

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

#### **4. Atualizar um Usuário**

*Este endpoint exigirá um token JWT no futuro. Substitua `1` pelo ID do usuário e `SEU_TOKEN_JWT` pelo token de autenticação.*

```bash
curl -X PUT http://localhost:3001/users/1 \
-H "Content-Type: application/json" \
-H "Authorization: " \
-d '{
  "nome": "John Doe Updated",
  "email": "john.doe.updated@example.com"
}'
```

#### **5. Deletar um Usuário**

*Este endpoint exigirá um token JWT no futuro. Substitua `1` pelo ID do usuário e `SEU_TOKEN_JWT` pelo token de autenticação.*

```bash
curl -X DELETE http://localhost:3001/users/1 \
-H "Authorization: "
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

A API ainda está em fase inicial. Os próximos recursos a serem implementados incluem:

-   [ ] Implementar o CRUD completo para **Alunos** (Create, Read, Update, Delete).
-   [x] Implementar o CRUD completo para **Usuários** (Create, Read, Update, Delete).
-   [ ] Adicionar sistema de autenticação e autorização com **JSON Web Tokens (JWT)**.
-   [ ] Criar rotas protegidas que exijam um token de autenticação.
-   [ ] Implementar funcionalidade de upload de fotos para os alunos.
-   [ ] Adicionar testes unitários e de integração para garantir a confiabilidade da API.
