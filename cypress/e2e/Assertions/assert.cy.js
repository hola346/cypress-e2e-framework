describe('BDD and TDD assertions', () => {

    beforeEach(() => {
      cy.visit('https://demoqa.com/radio-button');
    })
    it('TDD Assertions', () => {
        cy.log('Length Check')
        cy.get('input[type="radio"]').should('have.length', 3);

        cy.log('Class Check')
        //cy.get('input[type="radio"]').last().should('have.class','disabled')
        cy.get('input[type="radio"]').eq(2).should('have.class','disabled')

        cy.log('Exist Check')
        cy.get('.mt-3').should('not exist'); // class mt-3

        cy.log('Check Text')
        cy.get('input[type="radio"]').eq(0).click({force:true});  // --> we click on first element, so the message is displayed
        cy.get('.mt-3').should('have.text','You have selected Yes') //mt-3 class should have the text belonging to 1st selection
        .and('include.text', 'Yes')
        .and('not.contain', 'NO')

        cy.get('.text-success').should('have.css', 'color', 'rgb(40,67,99)')
    });

    it('BDD assertions', () => {

        cy.log('Length and Class')
        cy.get('input[type="radio"]').should($inputs=>{ //haces lo mismo que antes
            expect($inputs).to.have.lengthOf(3)
            expect($inputs[2]).to.have.class('disabled')
        })
        
        cy.log('Text validation')
        cy.get('input[type="radio"]').eq(1).click({force:true}); 
        cy.get('.mt-3').should($class=>{
            expect($class).to.have.text('You have selected Yes')
            expect($class).to.include.text('Impressive')
            expect($class).to.not.include.text('No')
        })
            
           

    });

});
