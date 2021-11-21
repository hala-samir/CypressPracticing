/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit(Cypress.env('url2'))
        cy.get('.left-align tr td:nth-child(2)').each(($el,index, $list)=>{
            const text=$el.text()
            if(text.includes("Python")){
                //use next to allocat the next sibling in dom
                cy.get('.left-align tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText=price.text()
                    expect(priceText).to.equal('25')

                })
            }
        })
    })
})