/// <reference types="Cypress" />

describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");

    // 모달 여닫기 체크
    cy.contains("Add Task").click();
    cy.contains("Cancel").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });

  it("should create a new task", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some description");
    cy.get(".modal").contains("Add Task").click();

    // 테스크 li가 생겼는지 체크
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("New Task");
    cy.get(".task p").contains("Some description");

    // 모달이 닫힌지 체크
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });

  it("should validate user input", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").contains("Add Task").click();
    cy.contains("Please provide value");
  });

  it("should filter tasks", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("New Task");
    cy.get("#summary").type("Some description");
    cy.get("#category").select("urgent");
    cy.get(".modal").contains("Add Task").click();

    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0);
    cy.get("#filter").select("urgent");
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });

  it("should add multiple tasks", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("Task1");
    cy.get("#summary").type("First Task");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);

    cy.contains("Add Task").click();
    cy.get("#title").type("Task2");
    cy.get("#summary").type("Second Task");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 2);

    // cy.get(".task").first()
    // cy.get(".task").last()
    cy.get(".task").eq(0).contains("First Task");
    cy.get(".task").eq(1).contains("Second Task");
  });
});
