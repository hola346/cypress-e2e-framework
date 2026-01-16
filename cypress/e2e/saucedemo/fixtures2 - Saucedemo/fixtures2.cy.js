// Load data located in a file

describe('Fixtures', function(){

beforeEach(function(){
    cy.visit("https://www.saucedemo.com");
    cy.fixture('fixtures2/SawCredentials')  // vendria a ser como un INCLUDE
    //cy.fixture('fixtures2/SauceCredentials')  // El JSON se usa para pasar datos de entrada en fichero
    .then(credentials =>{
        this.credentials=credentials; // Haces esto para poder instanciar (abajo) las variables definidas en el JSON
    })
});

it('Standard Username', function(){
    cy.get('[data-test="username"]').type(this.credentials.StandardUser);
    cy.get('[data-test="password"]').type(this.credentials.SystemPassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('.title').should('contain.text','Products')
}); 

it('Incorrect Username', function(){
    cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
    cy.get('[data-test="password"]').type(this.credentials.SystemPassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text','do not match')
});

it('Incorrect Password', function(){
    cy.get('[data-test="username"]').type(this.credentials.StandardUser);
    cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text','do not match any user in this service')
});

it('Locked Password', function(){
    cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
    cy.get('[data-test="password"]').type(this.credentials.SystemPassword);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
});

});