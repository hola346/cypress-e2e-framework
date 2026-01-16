
describe('Commands Example', function(){

    beforeEach(function(){
    cy.visit("https://www.saucedemo.com");
    cy.typelogin('standard_user', 'secret_sauce');
    });

    it('Test', function(){

        cy.log('Test');  // Chivato, si llega aquí escribe esto en consola

    });

    it('Is Products there?', function(){

        cy.get('.title').should('contain.text','Products');
        cy.log('Test');  // Chivato, si llega aquí escribe esto en consola

    });

    afterEach(function(){
    cy.logout();
    });


    after(function (){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

});