const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configurações gerais
  viewportHeight: 880,
  viewportWidth: 1280,

  // Configuração dos testes end-to-end
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    // Tempo de espera global
    defaultCommandTimeout: 10000, // 10 segundos
    requestTimeout: 15000, // 15 segundos para requisições API

    // Tentativas automáticas em caso de falha
    retries: {
      runMode: 2, // 2 tentativas em execução via terminal
      openMode: 1 // 1 tentativa ao rodar via interface
    },

    // Configuração de logs e eventos
    setupNodeEvents(on, config) {
      // Captura logs durante os testes
      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
    }
  },

  // Variáveis de ambiente
  env: {
    apiUrl: 'https://serverest.dev',
    validEmail: 'leonardo@teste.com.br',
    validPassword: '@1bz592idyxHLw6'
  },

  // Configurações de gravação e relatórios
  video: true, // Gravação de vídeo habilitada
  screenshotOnRunFailure: true, // Tira print ao falhar
  trashAssetsBeforeRuns: true // Limpa arquivos antigos

});

