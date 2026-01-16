
let item1="test";
let item2="wash dishes";

describe('Intercept Demo', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:8888/');
        cy.request({
            method: 'GET',
            url: 'http://localhost:8888/' // Asumiendo que tu API está configurada para responder a este endpoint
        }).then((response) => {
        // Registra la respuesta en la consola y en el registro de Cypress
        cy.log('Respuesta del usuario:', response.body); // Imprime en el registro de comandos de Cypress
        console.log('Respuesta del usuario:', response.body); // Imprime en la consola del navegador
        });
        cy.get('.header').should('contain.text','todos');
        cy.fill_todos(item1);
        cy.fill_todos(item2);
    });


    it('Verify TODOs were inserted', ()=> {
        cy.visit('http://localhost:8888/');
        cy.get('.todo-list li') // obtiene numero de elementos li que hemos añadido a la lista - se puede establecer timeout
        .should('have.length', 2) // Assertion, deberían haber 2 nums añadidos
        .and('contain',item1)
        .and('contain',item2)
    });

    // Intentamos interceptar una respuesta del GET para modificar nuestro REQUEST con parámetros diferentes en la respuesta:

    it('Mocked API Response', ()=>{

        cy.intercept('GET', '/todoapdffp', {

// No me funciona porque el path /todo no existe en la página. 
// Sintaxis: intercept WHAT (get), URL-PATH (/todo - componente XHR que tiene respuesta GET 200 HTTP), y FIXTURE - cambio de esa respuesta

            fixture: '/Intercept/InterceptFixture.json'
        }).as('getTodos-Fixture') //alias

// Aquí estás metiendo los cambios definidos en un archivo JS. Otra forma sería escribirlos directamente, sin usar el archivo. 
// Para ello crearías una constante, siguiendo el formato de sintaxis del JS - [{}] y la llamas como body:
        cy.visit('http://localhost:8888/');
        cy.log('Testtttttt')

    }); 

        it('Marcar completed', ()=> {
        cy.visit('http://localhost:8888/');
        cy.get('.todo-list li') // obtiene numero de elementos li que hemos añadido a la lista - se puede establecer timeout
        .should('have.length', 2) // Assertion, deberían haber 2 nums añadidos
        .and('contain',item1)
        .and('contain',item2)
        //cy.get('div input').first().click();
        //cy.get('.toggle').filter('[type="checkbox"]').last().click(); 
        cy.get('.toggle').last().click();// clase toggle, los botones de selección
        // comprobación que hemos marcado el último como completado en la lista:
        //cy.get()
        //.todo-list li.completed label { color: #949494; text-decoration: line-through;
        cy.get('.todo-list li.completed label').should('have.css', 'text-decoration', 'line-through');
    // Esto se ve en el HTML - styles, comprobación de formato de texto que cambia cuando seleccionas TODO completado - se tacha
    });


});