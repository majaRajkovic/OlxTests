describe('Should open nekretnine page and click around', function(){
    it('Open nektretnine page', function(){
        cy.visit('nekretnine')
        cy.title().should('eq','Nekretnine: Stanovi, Kuće, Zemljišta, Poslovni prostori, Vikendice, Apartmani, Sobe, Garaže, Montažni objekti, Ostalo - OLX.ba')
        cy.location('protocol').should('eq','https:')
        cy.contains('Traži nekretnine').should('be.visible')

    })

    it('Open Vikendice in Category of real estate', function(){
        cy.contains('Vikendice').click()
        cy.get("input[id='samoprodaja']").check()
        cy.get("select[id='kanton']").select('14')
        cy.get("select[id='grad']").select('21')
        cy.get("input[id='od']").type('9000')
        cy.get("input[id='do']").type('30000')
        cy.get("input[id='uknjizeno-zk_checkbox']").eq(1) .click()
        cy.get("span[id='trazinekretnine']").first().click()
        cy.get(".na").contains('Vikendica /vikend kuća 30m od Vrbanje').click()
    })
})