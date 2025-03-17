const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,  // Garante que o HTML será gerado
    json: false,  // Impede a geração do JSON
    charts: true, // Adiciona gráficos interativos
    embeddedScreenshots: false,
  },
  projectId: 'i6q3un',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // Outros event listeners podem ser adicionados aqui
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/',
    video: false,
  },
});
