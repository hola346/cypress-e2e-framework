describe('dummyapi_list', () => {

    it('check page dummy api list', ()=>{

        cy.visit('https://dummyapi.io/explorer/');
        cy.request({
            method: 'GET',
            url: 'https://dummyapi.io/explorer/' // Asumiendo que tu API está configurada para responder a este endpoint
        }).then((response) => {
        // Registra la respuesta en la consola y en el registro de Cypress
        cy.log('Respuesta del usuario:', response.body); // Imprime en el registro de comandos de Cypress
        console.log('Respuesta del usuario:', response.body); // Imprime en la consola del navegador
        });
        //cy.get('.header').should('contain.text','todos');

        });
});