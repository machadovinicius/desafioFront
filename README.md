# GitHub Explorer

Aplicação front-end que consome a API pública do GitHub para exibir informações de usuários e seus repositórios, com foco em organização, experiência do usuário e boas práticas de desenvolvimento.

## 🚀 Tecnologias

- React
- TypeScript
- React Router
- Axios
- Bootstrap

## 📦 Instalação

npm install

## ▶️ Executando o projeto

npm run dev

## 🔗 Demo

https://desafio-front-dusky.vercel.app/

## 🔍 Funcionalidades

- Buscar usuários do GitHub
- Visualizar detalhes do perfil (avatar, bio, seguidores, etc.)
- Listar repositórios públicos ordenados por estrelas
- Alterar ordenação dos repositórios
- Visualizar detalhes de um repositório
- Navegação entre páginas utilizando rotas

## 🌐 API utilizada

- https://api.github.com/users/{username}
- https://api.github.com/users/{username}/repos
- https://api.github.com/repos/{full_name}

## 🧠 Decisões técnicas

- Organização do projeto por features
- Separação de responsabilidades (components, services, pages)
- Uso de React Router para navegação
- Consumo de API com Axios
- Utilização de useMemo para otimização da ordenação
- Tratamento de estados de loading, erro e vazio

## 📱 Responsividade

A aplicação foi construída utilizando Bootstrap, garantindo adaptação para diferentes tamanhos de tela (mobile, tablet e desktop).
