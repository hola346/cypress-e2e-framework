describe('Location Demo', function(){

    beforeEach(function(){
      cy.visit("https://www.saucedemo.com");
    });

    it('title should be Swag Labs', function(){
        cy.title().should('eq', 'Swag Labs')
    });

    it('Verify URL is correct', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });

    it('Verify Location EQUAL', function(){
        cy.location('protocol').should('eq', 'https:')
    });

    it('Verify Location CONTAINS', function(){
        cy.location('protocol').should('contains', 'https')
    });

    it('Verify hostname', function(){
        cy.location('hostname').should('contains', 'www.saucedemo')
    });

    it.skip('LOGIN and redirect URL', function(){
        cy.get('#user-name')    // Usamos # para nombre de variable INPUT ID del html
        .type('standard_user')

        cy.get('#password')
        .type('secret_sauce{enter}')  
        
        cy.url().should('contains', 'inventory')
    });

        it('LOGIN - data-test | and redirect URL', function(){
        cy.get('[data-test="username"]').type('standard_user')  //Podemos hacerlo igual, pero en lugar de pillar el INPUT ID, cogemos el parámetro http DATA-TEST

        cy.get('[data-test="password"]').type('secret_sauce')
        //.type('secret_sauce{enter}')     --> Podemos hacer esto si después de insertar password le damos al ENTER
        
        cy.get('[data-test="login-button"]').click()

        cy.url().should('contains', 'inventory')

        cy.location('pathname').should('contains', 'inventory')   // también se puede hacer así, usando location - pathname
        // pathname guarda lo que NO es hostname - URL = protocol + hostname + pathname
    });

});