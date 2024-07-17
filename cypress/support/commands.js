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

Cypress.Commands.add("loginAPIfixture", () => {
  cy.get(
    "li[class='dropdown loggedout open'] li:nth-child(1) a:nth-child(1)"
  ).click();

  cy.fixture("userLoginData").then(function (data) {
    for (const [key, value] of Object.entries(data)) {
      cy.get(key).type(value);
    }
  });

  cy.get(
    "div[id='modalLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  ).click();
});

Cypress.Commands.add("registerAPIfixture", () => {
  cy.get(
    "li[class='dropdown loggedout open'] li:nth-child(2) a:nth-child(1)"
  ).click();

  cy.fixture("userRegData").then(function (data) {
    for (const [key, value] of Object.entries(data)) {
      cy.get(key).type(value);
    }
  });

  cy.get(
    "div[id='modalUserLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  ).click();
});
