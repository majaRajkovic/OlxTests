describe('Should open page Kompjuteri, buy computer and remove some filters', function(){

    it('Opens computer page', function(){
        cy.visit('kompjuteri')
        cy.title('Kompjuteri: Kompjuterska oprema, Laptopi, Desktop Računari, Mreže i Komunikacije, Softver, Ostalo, Serveri, Mining rigovi, Kriptovalute - OLX.ba')
        cy.location('protocol').should('eq','https:')
        cy.contains('Kompjuteri (183662').should('be.visible')
    })

    it('Open desktop racunari', function(){
        cy.get("div[id='filter-kategorije-div']").contains(' Desktop Računari').click()
        cy.contains('Desktop Računari').should('be.visible')
        cy.get("select[id='kanton']").select('14')
        cy.get("input[id='grad_21']").check()
        cy.get(".osvjezirezultate").click()
        cy.get("input[id='od']").type('1000')
        cy.get("input[id='do']").type('5000')
        cy.get(".osvjezirezultate").click()
        cy.get("input[id='samoprodaja']").check()

    })





})