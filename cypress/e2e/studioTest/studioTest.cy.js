
// Test Autogenerado por Cypress Studio
it('studio', function() {
    cy.visit('https://demoqa.com/webtables')
    
    cy.get('div.element-group:nth-of-type(1) #item-3 span.text').click();
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').click();
    cy.get('#firstName').type('test');
    cy.get('#lastName').type('test');
    cy.get('#age').type('34');
    cy.get('#salary').type('10000');
    cy.get('#submit').click();
    cy.get('#userEmail').click();
    cy.get('#userEmail').type('asfa@sf.com');
    cy.get('#department').click();
    cy.get('#department').type('saf');
    cy.get('#submit').click();
    
});