/// <reference types="Cypress" />
describe('test suite', function () {
    it('hover in cypress', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('div.mouse-hover-content').invoke('show')
        //click the hidden element by force true
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})