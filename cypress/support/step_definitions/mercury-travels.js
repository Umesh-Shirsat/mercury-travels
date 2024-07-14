import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../pageObjects/HomePage";

const homepage = new HomePage();

Given("User opens mercury travels page", () => {
  cy.visit("https://www.mercurytravels.co.in/");
});

When("User clicks on Customer Login", () => {
  // cy.get(".dropdown-toggle").eq(2).click();
  homepage.getLogin().eq(2).click();
});

//*********** */
// Registration
When("User registers", (table) => {
  homepage.register(table);
});

// Fails
Then("User should get registered", () => {
  cy.get(
    "body > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(2)"
  ).should("have.text", "Registration Successful");
});

// Passes
Then("User gets error of already registered", () => {
  cy.get(
    "body > div:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(2)"
  ).should("have.text", "Registration Failed");
});

//*********** */
// When("User clicks on register", () => {
//   cy.get(
//     "li[class='dropdown loggedout open'] li:nth-child(2) a:nth-child(1)"
//   ).click();
// });

// When("Enters all the details", (table) => {
//   const hash = table.hashes();
//   for (const [key, value] of Object.entries(hash[0])) {
//     cy.get(key).type(value);
//   }
// });

// When("User clicks register on form", () => {
//   cy.get(
//     "div[id='modalUserLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
//   ).click();
// });

When("User logs in", (table) => {
  homepage.login(table);
});

// Then("User gets logged in", async () => {
//   const welcome = await homepage.getLogin().text();
//   expect(welcome.includes("world"));
// });
