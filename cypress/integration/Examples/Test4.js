/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit(Cypress.env('url2'))
        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //open window in the same tab
        cy.get('#opentab').invoke('removeAttr','target').click()
        //assert the current url
        cy.url().should('include', 'rahulshettyacademy')
        //go back 
        cy.go('back')
        cy.url().should('include','AutomationPractice')
    })
})