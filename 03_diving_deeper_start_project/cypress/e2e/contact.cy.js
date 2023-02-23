/// <reference types="Cypress"/>

describe("contact form", () => {
  it("should submit the form", () => {
    cy.visit("http://127.0.0.1:5173/about");
    cy.get('[data-cy="contact-input-message"]').type("Hello world!");
    cy.get('[data-cy="contact-input-name"]').type("John Doe");

    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr("disabled")).to.be.undefined;
      expect(el.text()).to.eq("Send Message");
    });

    // cy.screenshot(); // 스크린샷
    cy.get('[data-cy="contact-input-email"]').type("test@example.com{enter}");
    // cy.screenshot(); // 스크린샷

    // cy.get('[data-cy="contact-btn-submit"]')
    //   .contains("Send Message")
    //   .should("not.have.attr", "disabled");
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    // cy.get("@submitBtn").click();
    cy.get("@submitBtn").contains("Sending...");
    cy.get("@submitBtn").should("have.attr", "disabled");
  });

  it("should validate the form input", () => {
    cy.visit("http://127.0.0.1:5173/about");
    cy.get('[data-cy="contact-btn-submit"]').click();

    // 아무것도 입력하지 않았을 때 버튼 테스트
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr("disabled");
      expect(el.text()).to.not.equal("Sending...");
    });

    // p태그에 빨간색 처리 되는 스타일 테스트
    cy.get('[data-cy="contact-btn-submit"]').contains("Send Message");
    cy.get('[data-cy="contact-input-message"]').as("msgInput");
    cy.get("@msgInput").blur();
    cy.get("@msgInput")
      .parent()
      .should("have.attr", "class")
      .and("match", /invalid/);
    // .then((el) => {
    //   expect(el.attr("class")).to.contains("invalid");
    // });

    cy.get('[data-cy="contact-input-name"]').focus().blur();
    cy.get('[data-cy="contact-input-name"]')
      .parent()
      .should("have.attr", "class")
      .and("match", /invalid/);

    cy.get('[data-cy="contact-input-email"]').focus().blur();
    cy.get('[data-cy="contact-input-email"]')
      .parent()
      .should((el) => {
        expect(el.attr("class")).not.to.be.undefined;
        expect(el.attr("class")).to.contain("invalid");
      });
  });
});
