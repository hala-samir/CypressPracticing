/// <reference types="Cypress" />
import {Given, When, And,Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../PageObject/HomePage"
import ProductsPage from "../../PageObject/ProductsPage"
import ShopPage from "../../PageObject/ShopPage"
import PurchasePage from "../../PageObject/PurchasePage"
const homePageObj = new HomePage()
const productsPageObj = new ProductsPage()
const shopPageObj = new ShopPage()
const purchasePageObj = new PurchasePage()

//Open eCommerce Page
Given('Open eCommerce Page',function(){
    cy.visit(Cypress.env('url'))
})
//Add items to cart
When('Add items to cart',function(){
    homePageObj.goToShopPage().eq(1).click()
        //read data array from fixure file
        this.data.productName.forEach(function (product) {
            cy.selectProduct(product)
        })
    productsPageObj.clickCheckout()
})
//Validate total price
And('Validate total price',function(){
    var sum = 0
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
    shopPageObj.clickCheckoutFromShop()
})
//Select country and validate success message
Then('Select country and validate success message',function(){
    purchasePageObj.fillCountryField(this.data.countryName)
    Cypress.config('defaultCommandTimeout',50000)
    purchasePageObj.clickCountrySuggestions()
    purchasePageObj.checkConditions()
    purchasePageObj.clickPuchase()
    purchasePageObj.successMsg().then(function(element){
       const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true
    })
})
//Fill form details
When('Fill form details',function(dataTable){
    var name = dataTable.rawTable[1][0]//this.data.name
    homePageObj.nameField().eq(0).type(name)
        //validate attribute
    homePageObj.nameField().eq(0).should('have.attr', 'minlength', '2')
    homePageObj.emailField().type(this.data.email)
    homePageObj.genderList().select(dataTable.rawTable[1][1]+"")//(this.data.gender)
    homePageObj.nameField().eq(0).should('have.value', name)
})
//Validate form behavior
Then('Validate form behavior',function(){ 
    //const name = this.data.name
   // var name = dataTable.rawTable[1][0]
    //homePageObj.nameField().eq(0).should('have.value', name)
    homePageObj.disabledOption().should('be.disabled')
})