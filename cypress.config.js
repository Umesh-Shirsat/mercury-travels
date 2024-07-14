const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild")
  .createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(
        on,
        config
      );
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    // baseUrl: "https://www.w3schools.com",
    supportFile: "cypress/support/e2e.js",
    stepDefinitions: "cypress/support/step_definitions/**/*.js",
    viewportHeight: 720,
    viewportWidth: 1280,
  },
});
