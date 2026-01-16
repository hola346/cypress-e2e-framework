describe('dummyapi_list', () => {

    beforeEach(function(){
        cy.request('GET', 'http://localhost:8888/#/').as('gettodos')
    })

    // Defines tu REQUEST - GET, como pueden haber varios, usas un ALIAS - AS específico para llamarlo luego. 

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

    const items = [
        {
            "title":"test",
            "completed":true,
            "id":"1"
        },
        {
            "title":"test2",
            "completed":true,
            "id":"2"
        },
    ]

    it.skip('full body?', ()=>{ 

        cy.request('http://localhost:8888/#/') 
        .its('body')
        .should('deep.eq',items); // ESTO compararía que el full body - JSON es igual a una constante prev def - const items=[]
        // Notar que para comparar la constante definida como JSON no vale eq, sino deep.eq

    });

    it.skip('JSON schema', ()=>{ 

        cy.request('http://localhost:8888/#/') 
        .its('body')
        .each(object =>{  // Notar que no hay ()
            expect(object).to.have.all.keys('title', 'completed', 'id') // Testeríamos la estructura del JSON, que tenga def esas KEYS.
        });

    });

    it('Using Alias Request', function(){
        cy.get('@gettodos').should(response=>{  // Llamas al ALIAS definido arriba
            expect(response.body).to.have.length(724)
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

    
});