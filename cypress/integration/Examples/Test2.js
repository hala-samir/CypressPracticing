/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-form').type('ca')
        //find element and add it to cart
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,index, $list)=>{
            const text = $el.find('h4.product-name').text()
            if(text.includes('Cashews')){
                $el.find('button').click()
            }
        })
        cy.get('a.cart-icon').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    });
 })