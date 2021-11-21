/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit(Cypress.env('url2'))
        //checkboxes
        cy.get('#checkBoxOption1').as('checkbox')
        cy.get('@checkbox').check().should('be.checked').and('have.value','option1')
        cy.get('@checkbox').uncheck().should('not.be.checked')
        //multichecking in one step
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
        //drodownlist
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        // dynamic ddl
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el,index, $list)=>{
            if($el.text()==='India'){
                $el.click()
            }
        })
        //visibility checks
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
        cy.get('[value="radio3"]').should('not.be.checked')

    })
})