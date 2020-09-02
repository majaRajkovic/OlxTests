describe('Open main page', function(){
    it('Sign in', function(){

        cy.visit('https://www.olx.ba/')
        cy.title().should('eq','OLX.ba - Svijet Kupoprodaje')
        cy.location('protocol').should('eq','https:')
        cy.get("a[id='loginbtn']").click()
        cy.get("input[id='username']").type(Cypress.env('username'))
        cy.get("input[id='password']").type(Cypress.env('password'))
        cy.get("input[id='btnlogin1']").should('be.visible').click()
        cy.contains('Aktivni artikli - Stanje', {timeout:10000}).should('be.visible')////verifikacija///
    })

    it('Should open main page', function(){
        cy.get("a[id='piklogo']").click()
        cy.contains('Dobrodošli na OLX.ba!').should('be.visible')
        cy.get("button[class='cookie-close']").click()
        
    })
    
})