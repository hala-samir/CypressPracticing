beforeEach(()=>{
    cy.fixture('data').then(function(data){
        this.data=data
    })
});