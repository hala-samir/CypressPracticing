/// <reference types="Cypress"/>
describe('change Api request', function(){
    it(' using intercept keyword', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req) => {
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotracc'
            req.continue((res)=>{
                expect(res.statusCode).to.equal(404)
            })
        }).as('request')
        
        cy.get('.btn.btn-primary').click()
        cy.wait('@request')

    })
})