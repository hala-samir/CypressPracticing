/// <reference types="Cypress" />
describe('test suite',function(){
    it('checkout items', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
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
        //visability checks
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })
})