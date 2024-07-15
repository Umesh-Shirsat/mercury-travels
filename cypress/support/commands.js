// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginAPI", (table) => {
  cy.get(
    "li[class='dropdown loggedout open'] li:nth-child(1) a:nth-child(1)"
  ).click();

  const hash = table.hashes();
  for (const [key, value] of Object.entries(hash[0])) {
    cy.get(key).type(value);
  }

  cy.get(
    "div[id='modalLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  ).click();
});

Cypress.Commands.add("registerAPI", (table) => {
  cy.get(
    "li[class='dropdown loggedout open'] li:nth-child(2) a:nth-child(1)"
  ).click();

  const hash = table.hashes();
  for (const [key, value] of Object.entries(hash[0])) {
    cy.get(key).type(value);
  }

  cy.get(
    "div[id='modalUserLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  ).click();
});
