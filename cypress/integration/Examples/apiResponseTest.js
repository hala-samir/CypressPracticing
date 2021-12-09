/// <reference types="Cypress"/>
describe('change Api response', function(){
    it(' using intercept keyword', ()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept({method:'GET',url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'},
            {
                statusCode:200,
                body:[{"book_name":"CypressFramework","isbn":"98521346","aisle":"324887"}]
            }).as('retvied_book')
        cy.get('.btn.btn-primary').click()
        cy.wait('@retvied_book').should(({request,response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

    })
})