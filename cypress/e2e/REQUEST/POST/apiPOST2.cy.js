const endpoint = 'https://api.mydummyapi.com/categories/animals'  // web animals todo - elementos

const todoObject = {"id":21,"type":"asdf","name":"asfasfd Hound",  //def de nuevo elemento a añadir
    "habitat":"wrwrwer","image":"https://loremflickr.com/640/480/sfssf?lock=1803067255160832"}

const addTodo = todoObject => {   //defines método AÑADIR elemento definido antes, recuerda estructura - elemento es el param entrada

    cy.request('POST', endpoint, todoObject);
}

describe('POST demo', ()=>{
    it('add todo', ()=>{

        addTodo(todoObject)  // llamas a método añadir elemento definido antes, llamando con parámetro de entrada
        //cy.request('GET','https://api.mydummyapi.com/categories/animals/21')
        //cy.request('GET', 'https://jsonplaceholder.cypress.io/todos/201')
        cy.request('GET',`${endpoint}/${todoObject.id}`)  // atención a los ACENTOS y ${} de javascript para mezclar valor de vars en strings
        .its('body')
        .should('deep.eq',todoObject)


    })
})