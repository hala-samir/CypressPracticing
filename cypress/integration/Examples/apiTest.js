/// <reference types="Cypress"/>
describe('test an Api', function(){
    it(' using response keyword', ()=>{
        cy.request(
            'POST',
            'https://reqres.in/api/users',
            {
                "name": "morpheus",
                "job": "leader"
            }
        ).then(function (response)
        {
            expect(response.status).to.eq(201)
           // expect(response.body).to.have.property("createdAt", "2021-12-09")
            
        })
    })
})