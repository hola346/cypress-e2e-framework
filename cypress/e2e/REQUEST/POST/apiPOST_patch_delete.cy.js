const endpoint = 'https://api.mydummyapi.com/todos'  // web animals todo - elementos

const todoObject = {"id":51,"title":"NewCommentApi","completed":true,"userId":39}

const addTodo = todoObject => {   //defines método AÑADIR elemento definido antes, recuerda estructura - elemento es el param entrada

    cy.request('POST', endpoint, todoObject);
}

const patchObject = {"id":51,"title":"NewCommentApi","completed":false,"userId":39}

const updateTodo = patchObject => {   //defines método AÑADIR elemento definido antes, recuerda estructura - elemento es el param entrada

    cy.request('PATCH', `${endpoint}/${todoObject.id}`, patchObject);
}

const deleteTodo = ObjectToDelete => {   //defines método AÑADIR elemento definido antes, recuerda estructura - elemento es el param entrada

    cy.request('DELETE', `${endpoint}/${ObjectToDelete.id}`);
}

describe('POST demo', ()=>{

    it('COUNT todos Previous UPDATE', ()=>{
        cy.request('GET', endpoint)
        .its('body')
        .should('have.length',50)
    })

    it('add todo', ()=>{

        addTodo(todoObject)  // llamas a método añadir elemento definido antes, llamando con parámetro de entrada
        //cy.request('GET','https://api.mydummyapi.com/categories/animals/21')
        //cy.request('GET', 'https://jsonplaceholder.cypress.io/todos/201')
        cy.request('GET',`${endpoint}/${todoObject.id}`)  // atención a los ACENTOS y ${} de javascript para mezclar valor de vars en strings
        .its('body')
        .should('deep.eq',todoObject)
        cy.request('GET', endpoint)
        .its('body')
        .should('have.length',51)
    })

    it('UPDATE todo', ()=>{

        updateTodo(patchObject)
        cy.request('GET',`${endpoint}/${todoObject.id}`)  // atención a los ACENTOS y ${} de javascript para mezclar valor de vars en strings
        .its('body')
        .should('deep.eq',patchObject)
        cy.request('GET', endpoint)
        .its('body')
        .should('have.length',51)

    })

    it('DELETE todo', ()=>{

        deleteTodo(patchObject)
        //cy.request('GET',`${endpoint}/${todoObject.id}`)  // atención a los ACENTOS y ${} de javascript para mezclar valor de vars en strings
        //.its('body')
        //.should('deep.eq',patchObject)
        cy.request('GET', endpoint)
        .its('body')
        .should('have.length',50)
    })
})