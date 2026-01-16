//Hooks - Mocha

/*
1. before() - solo 1 vez, al princpio 
2. beforeEach() - antes de cada TC
3. TEST EXECUTION
4. afterEach() - después de cada TC
2. beforeEach() - antes de cada TC
3. TEST EXECUTION
4. afterEach() - después de cada TC
5. after - solo 1 vez, al final
*/


// Skip Only

describe('Demo de Hooks', () =>{

    before(function(){
        cy.log('Before');
    })

    beforeEach(function(){
        cy.log('BeforeEach');
    })

    it('test 1', ()=>{
        console.log('test 1')
    })
    it.only('test 2', ()=>{
        console.log('test 2')
    })  
    it('test 3', ()=>{
        console.log('test 3')
    })

    afterEach(function(){
    cy.log('AfterEach');
    })

    after(function(){
    cy.log('After');
    })
})