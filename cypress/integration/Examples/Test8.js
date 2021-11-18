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
        cy.get("input[name='name']").eq(0).type(testData.name)
        cy.get("input[name='email']").type(testData.email)
        cy.get('#exampleFormControlSelect1').select(testData.gender)
    })
})