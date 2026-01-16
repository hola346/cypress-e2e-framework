describe('Keyboard Vel', () => {

    beforeEach(() => {
      cy.visit('https://saucedemo.com');
    })
    it('Slow Keyboard', {keystrokeDelay:500}, () => {
        cy.get('#user-name').type('hola')
    });
        it('Slow Keyboard', () => {
        cy.get('#user-name').type('hola')
    });
        it('Slow Keyboard', {keystrokeDelay:0}, () => {
        cy.get('#user-name').type('hola')
    });
});