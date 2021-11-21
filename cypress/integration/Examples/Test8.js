/// <reference types="Cypress" />
import HomePage from "./PageObject/HomePage"
import ProductsPage from "./PageObject/ProductsPage"
import ShopPage from "./PageObject/ShopPage"
import PurchasePage from "./PurchasePage"
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
        const shopPageObj = new ShopPage()
        const purchasePageObj = new PurchasePage()
        var sum = 0
        cy.visit(Cypress.env('url'))
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
        productsPageObj.clickCheckout()
        //dynamic sum calculation in checkout page
        //loop on the items table to grab prices
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
            const actualText= $el.text()   
            var result = actualText.split(" ")
            result = result[1].trim()
            sum= Number(sum)+Number(result)
        }).then(function(){cy.log(sum)})
        //assert the total price against the calculated
        cy.get('h3 strong').then(function(element){
            var total = Number(element.text().split(" ")[1])
            expect(sum).to.equal(total)
        })
        //click checkout
        shopPageObj.clickCheckoutFromShop()
        purchasePageObj.fillCountryField(testData.countryName)
        Cypress.config('defaultCommandTimeout',50000)
        purchasePageObj.clickCountrySuggestions()
        purchasePageObj.checkConditions()
        purchasePageObj.clickPuchase()
        purchasePageObj.successMsg().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})