describe('Travpart site testing', () => {
    
    it('Signup page', () => {
        cy.viewport(1360, 1000)
        cy.visit("https://www.travpart.com/")
        cy.get("a[class='mega-menu-link'][href*='/register2']").click()

        
    });
});