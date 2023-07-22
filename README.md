# teste-trusted

###### Como executar

O projeto acessa a API pública do GitHub, a API tem limites de taxa para solicitações anônimas. Então, para evitar problemas este projeto usa um token para acessar a API.

O primeiro passo para executar esse projeto deve ser gerar o seu próprio token, para isso:

1. Faça login na sua conta do GitHub.
2. Acesse "Settings" (Configurações) no menu do perfil.
3. Clique em "Developer settings" (Configurações de desenvolvedor) no menu lateral.
4. Selecione "Personal access tokens" (Tokens de acesso pessoal).
5. Clique em "Generate new token" (Gerar novo token).
6. Selecione as permissões de leitura de usuário (Update ALL user data)
7. Clique em "Generate token" (Gerar token) e copie o token gerado.
8. Cole esse token no ponto env do projeto, bem na frente de GITHUB_ACCESS_TOKEN=


O próximo passo é dentro do diretório *`backend  `*

1. executar o comando `npm install`
2. executar `npm run dev`, a partir daqui o backend estará executando

A versão do node usada na execução do projeto foi: `16.13.0`


O terceiro passo é executar o frontend no diretorio `frontend/trusted`

1. executar o comando `npm install`
2. executar o comando `npm start`

A aplicação será inicializada e a partir dai é possível utilizá-la
