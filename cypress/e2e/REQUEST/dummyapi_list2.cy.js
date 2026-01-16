describe('dummyapi_list', () => {

    it('body lenght?', ()=>{  //again, cannot try it since xhr element is missing

        cy.request('http://localhost:8888/#/')  // deberías usar el elemento xhr de la respuesta, /todos. En el navegador verías que la
        // url completa te da el json de los items insertados en la lista, que deberían ser 2 - definido como Array 2 en el YIELDED object
        // DE CONSOLE 
        .its('body')
        .should('have.length',724);

    });

    it('Status', ()=>{

        cy.request('http://localhost:8888/#/')
        .its('status')   // presente también en el YIELDED
        .should('eq',200);

    });

    it('content type - text', ()=>{

        cy.request('http://localhost:8888/#/')
        .its('headers')
        .its('content-type')   // presente también en el YIELDED
        .should('contains','html'); // Es HTML porque no estoy accediendo al JSON de la lista, sino a la misma web

    });



    
});