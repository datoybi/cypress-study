/// <reference types="Cypress"/>

describe("page navigation", () => {
  it("should navigate between pages", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get('[data-cy="header-about-link"]').click();
    cy.location("pathname").should("eq", "/about"); // /about
    cy.go("back");
    cy.location("pathname").should("eq", "/"); // / homePage

    cy.get('[data-cy="header-about-link"]').click();
    cy.get('[data-cy="header-home-link"]').click();
    cy.location("pathname").should("eq", "/"); // / homePage
  });
});
