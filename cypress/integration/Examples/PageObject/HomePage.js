
class HomePage {
    nameField() {
        return cy.get("input[name='name']")
    }
    emailField() {
        return cy.get("input[name='email']")
    }
    disabledOption() {
       return cy.get('#inlineRadio3')
    }
    genderList() {
      return  cy.get('#exampleFormControlSelect1')
    }
    goToShopPage() {
       return cy.get('.nav-link')
    }
}
export default HomePage