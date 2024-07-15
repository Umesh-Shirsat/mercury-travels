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
  cy.registerAPI(table);
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

//******************** */
// When("User logs in", (table) => {
//   homepage.login(table);
// });
When("User logs in", (table) => {
  cy.loginAPI(table);
});

// Then("User gets logged in", async () => {
//   const welcome = await homepage.getLogin().text();
//   expect(welcome.includes("world"));
// });
//********************** */

// Check for about us dropdown
When("User clicks on about us tab", () => {
  homepage.getLogin().eq(3).click();
});

// Check for about us page
When("User clicks on about us option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)"
  ).click();
});

Then("User should visit about us page", () => {
  homepage.getTitle().should("have.text", "About Us");
});

// Check for branch page
When("User clicks on Find a Branch option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)"
  ).click();
});

Then("User should visit branch page", () => {
  cy.get(".tittle").should("have.text", "Our Branches");
});

// Check for testemonials page
When("User clicks on Testimonials option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)"
  ).click();
});

Then("User should visit Testimonials page", () => {
  homepage.getTitle().should("have.text", "Testimonials");
});

// Check for awards page
When("User clicks on Awards option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)"
  ).click();
});

Then("User should visit Awards page", () => {
  homepage.getTitle().should("have.text", "Awards");
});

// Check for careers page
When("User clicks on Careers option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)"
  ).click();
});

Then("User should visit Careers page", () => {
  homepage.getTitle().should("have.text", "Careers");
});

// Check for contact us page
When("User clicks on Contact Us option in dropdown", () => {
  cy.get(
    "body > nav:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(10) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)"
  ).click();
});

Then("User should visit Contact Us page", () => {
  homepage.getTitle().should("have.text", "Contact Us");
});
//********************************** */

// Check for insurance page
When("User clicks on Insurance tab", () => {
  cy.get(".nav:nth-child(1) > li:nth-child(9)").click();
});

// Check for forex page
When("User clicks on Forex tab", () => {
  cy.get(".nav:nth-child(1) > li:nth-child(8) > a")
    .invoke("removeAttr", "target")
    .click();
});

Then("User should visit Insurance page", () => {
  cy.origin("https://buyforex.com", () => {
    cy.get(".modal-title.modal-title.country-hdr").should(
      "have.text",
      "Select your City"
    );
  });
});

Then("User should see 7 scrolling images", () => {
  cy.get(".int_banner2").should("have.lengthOf", 7);
});
