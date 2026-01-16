
describe('Commands Example', function(){

    beforeEach(function(){
    cy.visit("https://www.saucedemo.com");
    });

    it('LoginOK', function(){
        cy.typelogin('standard_user', 'secret_sauce');
        cy.log('Test');  // Chivato, si llega aquí escribe esto en consola
        cy.logout();
    });

    it('Is Products there?', function(){
        cy.typelogin('standard_user', 'secret_sauce');
        cy.get('.title').should('contain.text','Products');
        cy.log('Test');  // Chivato, si llega aquí escribe esto en consola
        cy.logout();
    });

        it('LoginKO', function(){
        cy.typelogin('standard_user', ' ');
        cy.get('.error').should('contain.text','Epic sadface: Username and password do not match any user in this service');
        // no controlo muy bien instanciar por clases, pero sí por data-test. 
    });

    after(function (){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });

});