describe('Intercept THIS WORKS', () => {

    it('check page', ()=>{

        cy.visit('https://dummyapi.io/explorer');

        cy.intercept('GET', '/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10', {fixture: '/InterceptFixtureLimit.json'
        }).as('intercept-LimitFixture'); //alias


        cy.get('.flex > :nth-child(4)').click();
        cy.wait('@intercept-LimitFixture').then(intercept => {  //damos tiempo al intercept para que cargue
            expect(intercept.response.body.limit).equal(5)      // comprobación de que nuestra modificación en fixtures hace efecto
        });
        //cy.visit('https://dummyapi.io/explorer');
        //cy.log('Testtttttt');
    });

// Estamos limitando artificialmente la respuesta a sólo que muestre 5 elementos en lugar de los 10 predefinidos

});