# Projeto Trybetunes

Neste projeto, trabalhei no desenvolvimento do TrybeTunes, uma aplicação voltada para música, que permite aos usuários realizar diversas ações. Suas principais funcionalidades incluem a capacidade de fazer login, pesquisar por bandas ou artistas, listar álbuns disponíveis, visualizar músicas de um álbum selecionado, reproduzir prévias de músicas, favoritar e desfavoritar músicas, gerenciar uma lista de músicas favoritas, acessar e editar o perfil do usuário logado. Ao longo desse projeto, aprimorei minhas habilidades em fazer requisições e consumir dados de uma API, utilizar os ciclos de vida dos componentes React, trabalhar com a função setState para garantir que o código seja executado no momento certo após a atualização do estado, configurar o componente BrowserRouter para gerenciar as rotas da aplicação, criar rotas correspondentes a diferentes componentes com o React Router, utilizar o componente Switch para direcionar corretamente as rotas e criar links de navegação na aplicação com o componente Link.

Em resumo, este projeto é uma oportunidade para você aplicar suas habilidades em desenvolvimento web com foco em React, consumir e manipular dados de uma API, criar uma experiência de usuário interativa e funcional, e aprimorar suas capacidades de gerenciamento de rotas em uma aplicação web.

## O que foi desenvolvido

- Criação de Rotas: Foram criadas as seguintes rotas utilizando o BrowserRouter:

  - Rota "/"
  - Rota "/search"
  - Rota "/album/:id"
  - Rota "/favorites"
  - Rota "/profile"
  - Rota "/profile/edit"
  - Qualquer outra rota não mapeada

- Formulário de Identificação: No componente "Login", que é renderizado na rota "/", foi criado um formulário onde os usuários podem se identificar fornecendo um nome.

- Componente de Cabeçalho: Foi criado o componente "Header" na pasta "src/components" para representar o cabeçalho da aplicação.

- Links de Navegação: Foram criados links de navegação no cabeçalho para redirecionar os usuários para as páginas de pesquisa, músicas favoritas e exibição de perfil.

- Formulário de Pesquisa de Artistas: Foi desenvolvido um formulário no componente "Search" (rota "/search") que permite aos usuários pesquisar álbuns de bandas ou artistas.

- Requisição para Pesquisar Artistas: Ao realizar uma pesquisa, a aplicação faz uma requisição para buscar álbuns da banda ou artista pesquisado e lista os álbuns encontrados. Um link é fornecido em cada card de álbum para redirecionar para a página do álbum correspondente.

- Lista de Músicas do Álbum: No componente "Album" (rota "/album/:id"), é exibida a lista de músicas do álbum selecionado.

- Adição de Músicas aos Favoritos: Foi implementado um mecanismo para adicionar músicas aos favoritos no componente "MusicCard". Os usuários podem marcar as músicas favoritas.

- Recuperação de Músicas Favoritas: Ao acessar a página de um álbum, as músicas já favoritadas são marcadas com o checkbox correspondente.

- Atualização da Lista de Músicas Favoritas: Após adicionar ou remover uma música dos favoritos, a aplicação faz uma requisição para atualizar a lista de músicas favoritas.

- Lista de Músicas Favoritas: Foi criada a lista de músicas favoritas no componente "Favorites" (rota "/favorites").

- Exibição de Perfil: A página de exibição de perfil foi criada no componente "Profile" (rota "/profile").

- Formulário de Edição de Perfil: Foi desenvolvido o formulário de edição de perfil no componente "ProfileEdit" (rota "/profile/edit"). O formulário é preenchido com as informações do usuário logado e exige que todos os campos sejam preenchidos para habilitar o botão de envio.

## Como usar

Este projeto é uma aplicação web em React e pode ser utilizado da seguinte forma:

1. Clone o repositório para o seu computador.
2. Navegue até o diretório do projeto.
3. Instale as dependências do projeto utilizando npm ou yarn.
4. Inicie a aplicação.
5. A aplicação estará disponível em seu navegador no endereço `http://localhost:3000/`.

A partir deste ponto, você pode explorar e utilizar o seu Trybetunes.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- React
- React Router
- CSS3

## Contato

- [Pedro Henrique] - [pedrohalmeidamendonca@gmail.com]
- [LinkedIn](https://www.linkedin.com/in/pedrohxiv/)
- [GitHub](https://github.com/pedrohxiv)

---

**Nota:** Este projeto foi desenvolvido como parte do curso da Trybe e tem como objetivo demonstrar habilidades em React, React Router e CSS. Sinta-se à vontade para explorar e entre em contato se tiver alguma pergunta ou feedback!
