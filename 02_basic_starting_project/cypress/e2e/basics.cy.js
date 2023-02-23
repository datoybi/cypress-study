/// <reference types="Cypress" />

describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get(".main-header").find('img');
    // cy.get(".main-header img");
  });

  it("should display the title", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get(".main-header h1").contains("My Cypress Course Tasks");
    // cy.contains("My Cypress Course Tasks"); // 존재하기만 한다면
  });
});
