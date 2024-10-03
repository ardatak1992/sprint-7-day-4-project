/// <reference types="cypress" />

describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Valid form submits and redirects to success page", () => {
    cy.get("#email").type("johndoe@gmail.com");
    cy.get("#password").type("123456789");
    cy.get("#terms").check();
    cy.contains("Login").click();
    cy.location("href").should("contain", "success");
    cy.get("h1").should("contain", "Success");
  });

  it("Entered wrong email", ()=> {
    cy.get("#email").type("johndoe@com");
    cy.get("#password").type("123456789");
    cy.get(".error-message").should("have.length" , 1);
    cy.contains("Please enter a valid email").should("exist");
    cy.contains("Password should be atleast 8 character long").should("not.exist");
    cy.get("#terms").check();
    cy.contains("Login").should("be.disabled");
  })

  it("Email and password is wrong", () => {
    cy.get("#email").type("johndoe@com");
    cy.get("#password").type("123");
    cy.get("#terms").check();
    cy.get(".error-message").should("have.length" , 2);
    cy.contains("Please enter a valid email").should("exist");
    cy.contains("Password should be atleast 8 character long").should("exist");
    cy.contains("Login").should("be.disabled");
  })

  it("Didn't accept the terms and conditions" , () => {
    cy.get("#email").type("johndoe@gmail.com");
    cy.get("#password").type("123456789");
    cy.contains("Login").should("be.disabled");
  })
});
