const endpoint = 'https://jsonplaceholder.cypress.io/todos'

const todoObject = {
    "userId": 11,
    "id": 201,
    "title": "Hola Hola Hola",
    "completed": false
}

const addTodo = todoObject => {

    cy.request('POST', endpoint, todoObject);
}

describe('POST demo', ()=>{
    it('add todo', ()=>{

        addTodo(todoObject)
        cy.request('GET','https://jsonplaceholder.cypress.io/todos')
        //cy.request('GET', 'https://jsonplaceholder.cypress.io/todos/201')
        //cy.request('GET','${endpoint}/${todoObject.id}')
        //.its('body')
        //.should('deep.eq',todoObject)


    })
})