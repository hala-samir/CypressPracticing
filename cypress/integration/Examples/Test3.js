/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //checkboxes
        cy.get('#checkBoxOption1').as('checkbox')
        cy.get('@checkbox').check().should('be.checked').and('have.value','option1')
        cy.get('@checkbox').uncheck().should('not.be.checked')
        //multichecking in one step
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //drodownlist
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')
    })
})