
let item1="test";
let item2="wash dishes";

describe('Intercept Demo', () => {

    it('Verify TODOs were inserted', ()=> {
        cy.visit('http://localhost:8888/');
        cy.get('.todo-list li') // obtiene numero de elementos li que hemos añadido a la lista - se puede establecer timeout
        .should('have.length', 2) // Assertion, deberían haber 2 nums añadidos
        .and('contain',item1)
        .and('contain',item2)
    });

});