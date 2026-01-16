// Variables location - username & pass para usar en mi programa

let username="standard_user";
let password="secret_sauce";

describe('Locators in Cypress', function(){

beforeEach(function(){
    cy.visit("https://www.saucedemo.com");
});

it('GET method', function(){
    cy.get('#user-name').type(username) // estamos buscando por ID username
    cy.get('input#password').type(password) // somos más específicos, referenciamos ID por tag previo - INPUT
    cy.get('[id="login-button"]').click()  // usando [] accedemos a cualquier campo INPUT del html
}); 

it.skip('EQ, first, last', function(){
    cy.get('input').first().type(username) // en nuestro formulario HTML hay 3 campos INPUT: user/pass/boton. First nos SITUA el primero
    cy.get('input').eq(1).type(password) // nos situamos en el 2o INPUT encontrado en el html - posición 1
    cy.get('input').last().click()  // marcamos el último
}); 

it.skip('FILTER method', function(){
    cy.get('input').filter('[type="text"]').type(username) // de los tres INPUTS, filtra por parámetro TYPE
    cy.get('input').filter('[type="password"]').type(password) 
    cy.get('input').filter('[type="submit"]').click()  
}); 

it.skip('FIND method', function(){
    cy.get('form').find('input').first().type(username) // FIND, busca tag formulario y busca TODOS los INPUTS que encuentre DENTRO (HIJOS) de form
    cy.get('form').find('input').eq(1).type(password) // nos situamos en el 2o INPUT encontrado en el html - posición 1
    cy.get('form').find('input').last().click()  // marcamos el último
});

it('PARENT method', function(){
    cy.get('form').parent().should('have.class','login-box') // Encuentra tag FORM y mira el tag - clase PADRE del que desciende
});

}); 