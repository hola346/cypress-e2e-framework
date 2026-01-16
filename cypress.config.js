const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:"cypress-mochawesome-reporter",
  screenshotOnRunFailure:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Test',
    embeddedScreenshots: true,
    reportDir:"cypress/Reports"
    //inlineAssets: true,
    //saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video:true,
  esperimentalStudio:true,
  
});
