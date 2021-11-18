/// <reference types="Cypress" />
describe('test suite', function () {
    let testData
    beforeEach(function(){
        
        cy.fixture('data').then(function(data){
          testData = data
          return testData
        })
    })
    it('read data from fixure file', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const name= testData.name
        cy.get("input[name='name']").eq(0).type(name)
        //validate attribute
        cy.get("input[name='name']").eq(0).should('have.attr','minlength','2')
        cy.get("input[name='email']").type(testData.email)
        cy.get('#exampleFormControlSelect1').select(testData.gender)
        cy.get("input[name='name']").eq(0).should('have.value',name)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('.nav-link').eq(1).click()
        cy.selectProduct('Blackberry')

    })
})