Projeto de Cadastro e Listagem de Produtos

Este repositório contém um projeto que permite cadastrar e listar produtos, com funcionalidades específicas tanto no frontend quanto no backend. Abaixo estão as instruções para configurar e executar a aplicação.

#### Backend:

O backend foi desenvolvido utilizando Node.js e Express, e depende das seguintes bibliotecas:

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend for Product Registration and Listing",
  "main": "server.js",
  "dependencies": {
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "express": "^4.16.3",
    "nodemon": "^1.18.3"
  },
  "devDependencies": {},
  "scripts": {
    "start": "nodemon ./server.js"
  },
  "author": "Seu Nome",
  "license": "ISC"
}
```

**Instruções para executar o backend:**

1. Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. No diretório raiz do projeto backend, instale as dependências usando npm:
   ```
   npm install
   ```

3. Inicie o servidor backend com o seguinte comando:
   ```
   npm start
   ```
   Isso iniciará o servidor na porta padrão 8000.

#### Frontend:

O frontend foi desenvolvido com React utilizando JavaScript, com uso dos hooks `useState` e `useEffect`, e também do `useNavigate` para navegação entre rotas. As requisições HTTP são feitas utilizando Axios.

**Instruções para executar o frontend:**

1. Certifique-se de ter o Node.js instalado. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. No diretório raiz do projeto frontend, instale as dependências usando npm:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento do React com o seguinte comando:
   ```
   npm start
   ```
   O servidor de desenvolvimento será executado na porta 3000 por padrão e abrirá automaticamente uma janela do navegador.

#### Utilização da Aplicação:

Ao iniciar a aplicação, você terá as seguintes funcionalidades:

- **Listagem de Produtos:** A listagem é exibida contendo um produto já cadastrada, ao criar outros produtos a lista é ordenada pelo valor do produto, do menor para o maior. Um botão permite adicionar um novo produto diretamente da listagem. 
- **Cadastro de Produtos:** Preencha o formulário com o nome, descrição, valor e disponibilidade do produto e clique em "Cadastrar produto".

#### Observações:

- Certifique-se de que o backend esteja em execução antes de iniciar o frontend, pois o frontend depende das APIs fornecidas pelo backend.
- Para fins de desenvolvimento, o frontend e o backend estão configurados para executar localmente. Para implantação em produção, considere configurar variáveis de ambiente adequadas.

Com essas instruções, você está pronto para configurar e executar o projeto localmente. Se precisar de mais detalhes ou ajuda adicional, não hesite em entrar em contato.