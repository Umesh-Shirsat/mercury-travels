class HomePage {
  getLogin() {
    return cy.get(".dropdown-toggle");
  }

  // register(table) {
  //   cy.get(
  //     "li[class='dropdown loggedout open'] li:nth-child(2) a:nth-child(1)"
  //   ).click();

  //   const hash = table.hashes();
  //   for (const [key, value] of Object.entries(hash[0])) {
  //     cy.get(key).type(value);
  //   }

  //   cy.get(
  //     "div[id='modalUserLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  //   ).click();
  // }

  // login(table) {
  //   cy.get(
  //     "li[class='dropdown loggedout open'] li:nth-child(1) a:nth-child(1)"
  //   ).click();

  //   const hash = table.hashes();
  //   for (const [key, value] of Object.entries(hash[0])) {
  //     cy.get(key).type(value);
  //   }

  //   cy.get(
  //     "div[id='modalLogin'] button[class='btn btn-lg btn-primary modal-btn ajax-submit']"
  //   ).click();
  // }

  getTitle() {
    return cy.get(".col-md-12.tittle.font30");
  }
}

export default HomePage;
