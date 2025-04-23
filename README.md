## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto:

### 1. Instalar as Dependências

Certifique-se de que você tenha o [Node.js](https://nodejs.org/) instalado. Em seguida, execute o comando abaixo para instalar as dependências do projeto:

```bash
npm install
```

### 2. Rodar o Projeto

Para iniciar o servidor de desenvolvimento, utilize o comando:

```bash
npm run dev
```

O projeto estará disponível no navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).

### 3. Usuário e senha para acesso

Usuário: admin
Senha: admin

### 4. TOKEN

Ao logar corretamente, é criado um fakeToken, caso não tenha esse fakeToken no navegador, ele redireciona automaticamente para a rota "/" Não permitindo com que o usuário tenha acesso as demais rotas sem se logar

### 5. Dependências

Estou utilizando as seguintes dependências no projeto
axios: 0.27.2
react-router-dom: 7.5.1
sweetalert2: 11.19.1
