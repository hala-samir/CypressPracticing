/// <reference types="Cypress" />
import HomePage from "./PageObject/HomePage"
import ProductsPage from "./PageObject/ProductsPage"
describe('test suite', function () {
    const homePageObj = new HomePage()
    let testData
    beforeEach(function () {

        cy.fixture('data').then(function (data) {
            testData = data
            return testData
        })
    })
    it('read data from fixure file', () => {
        const homePageObj = new HomePage()
        const productsPageObj = new ProductsPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        const name = testData.name
        homePageObj.nameField().eq(0).type(name)
        //validate attribute
        homePageObj.nameField().eq(0).should('have.attr', 'minlength', '2')
        homePageObj.emailField().type(testData.email)
    
        homePageObj.genderList().select(testData.gender)
        homePageObj.nameField().eq(0).should('have.value', name)
        homePageObj.disabledOption().should('be.disabled')
        homePageObj.goToShopPage().eq(1).click()
        //read data array from fixure file
        testData.productName.forEach(function (product) {
            cy.selectProduct(product)
        })
    })
})