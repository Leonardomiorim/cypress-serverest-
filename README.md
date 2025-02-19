Cypress-Serverest

Este repositório contém testes automatizados para a API e a interface do Serverest utilizando Cypress.

Tecnologias Utilizadas

* Cypress - Framework de testes end-to-end.
* Faker.js - Gera dados aleatórios para os testes.
* Node.js - Ambiente de execução JavaScript.

Estrutura do Projeto

cypress-serverest/

├── cypress/

│   ├── e2e/

│   │   ├── api/              # Testes da API

│   │   │   ├── login.spec.js

│   │   │   ├── produto.spec.js

│   │   ├── front/            # Testes do Frontend

│   │   │   ├── cadastro/

│   │   │   │   ├── cadastroNegative.spec.js

│   │   │   │   ├── cadastroPositive.spec.js

│   │   │   ├── fluxo/

│   │   │   │   ├── fluxoCompleto.spec.js

│   │   │   ├── login/

│   │   │   │   ├── loginNegative.spec.js

│   │   │   │   ├── loginPositive.spec.js

│   │   │   ├── menu/

│   │   │   │   ├── menu.spec.js

│   ├── fixtures/           # Arquivos JSON com dados simulados

│   ├── screenshots/        # Capturas de tela automáticas em caso de falha

│   ├── support/

│   │   ├── commands/      # Custom commands do Cypress

│   │   │   ├── cadastroCommands.js

│   │   │   ├── fluxoCommands.js

│   │   │   ├── loginApiCommands.js

│   │   │   ├── loginCommands.js

│   │   │   ├── menuCommands.js

│   │   │   ├── produtoApiCommands.js

│   │   ├── e2e.js         # Arquivo que importa os commands

├── node\_modules/          # Dependências do projeto

├── cypress.config.js      # Configuração do Cypress

├── package.json           # Dependências e scripts do projeto

└── package-lock.json      # Versões travadas das dependências


Requisitos

* Node.js (versão recomendada: 18+)
* npm (gerenciador de pacotes do Node.js)

Instalação

Clone este repositório:

git clone https://github.com/Leonardomiorim/cypress-serverest.git

1. Acesse a pasta do projeto:

cd cypress-serverest

1. Instale as dependências:

npm install

1. Execução dos Testes

Executar os testes com interface visual do Cypress:

npx cypress open


Selecione a opção "E2E Testing" e escolha o navegador para rodar os testes.

Executar os testes em modo headless (sem interface):

npx cypress run


Executar apenas os testes de API:

npx cypress run --spec "cypress/e2e/api/\*.spec.js"


Executar apenas os testes de Frontend:

npx cypress run --spec "cypress/e2e/front/\*.spec.js"


Configuração de Ambiente

As variáveis de ambiente são configuradas no arquivo cypress.config.js. Por padrão, o projeto utiliza a seguinte configuração:

env: {

apiUrl: 'https://serverest.dev',

validEmail: 'leonardo@teste.com.br',

validPassword: '123123'

}


Se for necessário sobrescrever alguma variável, utilize:

npx cypress run --env apiUrl=https://outro-servidor.com


Contribuição

1. Crie um fork do repositório.

Crie uma nova branch para sua feature:

git checkout -b minha-feature

1. Faça as modificações e commite:

git commit -m "Adiciona nova funcionalidade"

1. Envie as alterações para seu fork:

git push origin minha-feature

1. 5. Abra um Pull Request para este repositório.

Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.