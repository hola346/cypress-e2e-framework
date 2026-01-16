// retry-ability

describe('Sesion retry ability', function(){
// Hook BeforeEach
    beforeEach(function(){
        cy.visit('http://localhost:8888/#/'); // comando
        cy.get('.new-todo') // Obtenemos un elemento (clase) del DOM
        .type('todo-A{enter}') // Escribe
        .type('todo-B{enter}') // Escribe
        .type('todo-C{enter}') // Escribe

        // Con esto, en el html, la lista completa de TODOs es ul, pero cada TODO A y B de DENTRO, es li
    });

    it('Crea 2 items', function(){
        cy.get('.todo-list li', {timeout:20000}) // obtiene numero de elementos li que hemos añadido a la lista - se puede establecer timeout
        .should('have.length', 3) // Assertion, deberían haber 2 nums añadidos
    });

        it('Verify lenght and names of inserted items', function(){
        cy.get('.todo-list li') // numero de elementos li que hemos añadido a la lista
        .should('have.length', 3) // Assertion, deberían haber 2 nums añadidos
        .and($li=>{               //sigue el should con una nueva verificación
            expect($li.get(0).textContent, 'first item').to.equal('todo-A')  //coge el primer li
            // Importante: si una falla, las otras no se ejecutan!!
            expect($li.get(1).textContent, '2nd item').to.equal('todo-B')  //coge el primer li
            expect($li.get(2).textContent, '3rd item').to.equal('todo-C')  //coge el primer li
        })
    });

});