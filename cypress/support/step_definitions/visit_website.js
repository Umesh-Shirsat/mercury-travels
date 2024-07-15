import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Mercury Travels website', () => {
  cy.visit('https://www.mercurytravels.co.in/');
});

Then('the Mercury Travels homepage should be visible', () => {
  cy.url().should('include', 'mercurytravels.co.in');
  cy.get('body').should('be.visible');
});

Then('the Mercury Travels logo should be displayed', () => {
  cy.get('.navbar-header > .navbar-brand > a > .mercurylogo').should('be.visible');
});

Then('the Mercury Travels logo should be clickable and redirect to the homepage', () => {
  cy.get('.navbar-header > .navbar-brand > a > .mercurylogo').click();
  cy.url().should('eq', 'https://www.mercurytravels.co.in/');
});

