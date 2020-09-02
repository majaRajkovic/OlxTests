describe('Login', function(){
    it('Sign in', function(){

        cy.visit('https://www.olx.ba/')
        cy.get("a[id='loginbtn']").click()
        cy.get("input[id='username']").type(Cypress.env('username'))
        cy.get("input[id='password']").type(Cypress.env('password'))
        cy.get("input[id='btnlogin1']").should('be.visible').click()




    })

})