describe("Guru99 Home page check", () => {
  // it('Enter Email Id', () => {
  //     cy.get("input[name='emailid']").type('sherybutts100@gmail.com');
  //     cy.get("input[name='btnLogin']").click();
  // });
  beforeEach(() => {
    cy.visit("https://demo.guru99.com/v4/");

    cy.get("input[name='uid']").type("mngr478595");
    cy.get("input[name='password']").type("EgasYjA");
    // cy.get("input[name='btnReset']").click();
    cy.get("input[name='btnLogin']").click();
  });

  // it('Dashboard Title Check', () => {
  //     cy.contains("h2","Guru99 Bank")
  //     cy.contains("a","Demo Site")
  // });

  it("Dashboard Side Bar Menu", () => {
    cy.get("a[href='addcustomerpage.php']").click();
    cy.get("input[name='name']").type("shery");
    cy.get("input[value='m']").click()
    cy.get("input[name='dob']").trigger("keydown",{
        key:'Enter'
    });
  });
});
