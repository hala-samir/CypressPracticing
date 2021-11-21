class ProductsPage{
clickCheckout(){
        return cy.get('.nav-link.btn-primary').click()
    }
}
export default ProductsPage
