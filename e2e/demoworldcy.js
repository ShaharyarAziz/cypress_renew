describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("https://demo.realworld.io");

    cy.contains("a", "Sign in").click();
    cy.get("input[type='email']").type("cypress123@gmail.com");
    cy.get("input[type='password']").type("cypress");
    cy.get("button[type='submit']").click();
  });
  it("TEST1", () => {
    cy.get("a[href='#/editor/']").click();
    cy.get("input[placeholder='Article Title']").type("Cypress Hooks");
    cy.get('input[placeholder="What\'s this article about?"').type(
      "Introduction"
    );
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      "Cypress is ana utomated web testing tool for testing web application components automatically."
    );
    cy.get("input[placeholder='Enter tags']").type("Cypress");
    cy.screenshot({ blackout: ["input[placeholder='Article Title']"] });
    cy.contains("button", "Publish Article").click();
    cy.contains("button", "Publish Article").click();
  });
  // it("TEST-Negative", () => {
  //   cy.visit("http://orange.sectem.com/symfony/web/index.php/auth/login");
  //   cy.title().should("eq","OrangeHRM57623");
  // });
});
