const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: false,
      json: true,
    },
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots'
  },
});
