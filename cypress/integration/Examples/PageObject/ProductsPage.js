class ProductsPage{
    productsTitles(){
        return cy.get('h4.card-title')
    }
}
export default ProductsPage
