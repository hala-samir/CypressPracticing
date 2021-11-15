/// <reference types="Cypress" />
describe('test suite',function(){
    it('first test', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-form').type('ca')
        cy.wait(1000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el,index, $list)=>{
            const text = $el.find('h4.product-name').text()
            if(text.includes('Cashews')){
                $el.find('button').click()
            }
        })
    });
 })