describe('dummyapi_list', () => {

    it.skip('check page dummy api list', ()=>{
        cy.visit('https://dummyapi.io/explorer');
        cy.request('GET', '/data/v1/user/60d0fe4f5311236168a109ca/post?limit=10').as('dummy')
        ///data/v1/user?limit=10
        ///data/v1/user/60d0fe4f5311236168a109ca/post?limit=10
    });

    it('https://shrimo.com/fake-api/todos', ()=>{
        cy.request('GET', 'https://api.mydummyapi.com/users').as('dummy2')
        ///data/v1/user?limit=10
        ///data/v1/user/60d0fe4f5311236168a109ca/post?limit=10
            cy.get('@dummy2').should(response=>{  // Llamas al ALIAS definido arriba
            expect(response.body).to.have.length(20)
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            
             });
    });    

});