/// <reference types="Cypress" />
describe('test suite', function () {
    it('hover in cypress', () => {
        cy.visit(Cypress.env('url2'))
        //cy.get('div.mouse-hover-content').invoke('show')
        //click the hidden element by force true
       // cy.contains('Top').click({force:true})
      //  cy.url().should('include','top')

        cy.get('#opentab').then(function(el){
            const url= el.prop('href')
            console.log(url)
            cy.visit(url)
        })

    })
})