describe('Should open Vozila page', function(){

    it('Open vozila page', function(){

    cy.visit('vozila')
    cy.title().should('eq','Polovna i nova vozila, automobili, motori, kamioni, traktori, teretna vozila - OLX.ba')
    cy.location('protocol').should('eq','https:')
    cy.contains('Traži vozila', {timeout:10000}).should('be.visible')////verifikacija///

    })

    it('Choose on vehicle', function(){
        cy.get("input[id='novoipolovno']").click()
        cy.get('select[id="v_b"]').select('900')
        cy.get('select[id="v_m"]').select('16')
        cy.get("input[id='od']").type('23000')
        cy.get("input[id='do']").type('64000')
        cy.get('select[id="kanton"]').select('9')
        cy.get("input[id='dizel']").click()
        cy.get("input[id='benzin']").click()
        cy.get("span[id='trazivozila']").click()





    })
})