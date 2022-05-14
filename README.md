# mobime
 Teste seletivo MobiEduca.me

# :rocket: Tecnologias
Esse projeto foi realizado com as técnologias:

* [Javascript](https://www.javascript.com/)      
* [Typescript](https://www.typescriptlang.org/)   
* [React](https://reactjs.org/)      
* [Chakra UI](https://chakra-ui.com/)
* [Axios](https://axios-http.com/docs/intro)

* Guia de execução
   1. Abrir o terminal de comandos da sua máquina
   2. Fazer a clonagem deste repositório ou baixar-lo: `git clone https://github.com/FranciscooNeto/mobime`
   3. Entrar na pasta do projeto pelo terminal, e instalar as dependências através do comando: `npm i`
   4. Após a instalação das dependências, iniciar o projeto executando o comando: `npm start`

   * Fluxo de navegação
   1. Após o início do programa o navegador na tela de login, hospedada no localhost:3000
   2. O sistema possui dois usuários cadastrados que podem ser utilizados para login que são `usuário: user1 - senha: senha123` e o `usuário: user2 - senha: 123senha`
   3. Após o login efetivo no sistema, o usuário será encaminhado para a tela de listagem tanto de escolas cadastradas dentro do sistema, quanto de escolas recebidas pela API.
   4. Pela barra de navegação o usuário pode ir para aba de cadastro de escola, navegar para a tela "sobre" ou fazer o logout no site.
  
# :exclamation: Importante

 - Por um problema de conexão com a API através do localhost, foi necessário a instalação de uma extensão no navegador para que contornasse o bloqueio, a extensão se chama `Allow CORS` e pode ser instalada <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=pt-BR">aqui</a>. Concluída a instalação basta acessar a extensão e ativá-la, clicando na opção "ON".
 - O site possui um sistema simples de autenticação, verificando por um token no LocalStorage do navegador, portanto caso o usuário tente ir diretamente para as abas de "/listar" ou "/cadastro" sem ter feito o login, será redirecionado automaticamente para a página de login.
 - Por fim, no cadastro de escolas através do site as escolas ficam armazenadas na memória de LocalStorage do navegador, por sua vez caso o usuário troque de navegador ou entre com a guia anônima as informações das escolas serão perdidas.