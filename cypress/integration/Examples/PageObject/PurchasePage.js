
class PurchasePage {
    fillCountryField(text) {
        return cy.get('#country').type(text)
    }       
    clickCountrySuggestions(){
        return cy.get('.suggestions').click()
    }
    clickPuchase(){
        return cy.get('.btn.btn-success').click()
    }
    checkConditions(){
       return cy.get('#checkbox2').click({force: true})
    }
    successMsg(){
        return cy.get('.alert')
    }
}
export default PurchasePage