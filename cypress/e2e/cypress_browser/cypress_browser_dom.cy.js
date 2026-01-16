describe('Browser Demo', () => {

    beforeEach(() => {
      cy.visit('https://www.whatismybrowser.com/');
    })
it('Browser demo', () => {
    cy.log(Cypress.browser);  // it gives you info of your browser

    if (Cypress.browser.name == 'chrome') {
        cy.get('.string-major').should('contain.text','Chrome')
        .and('contain.text','Chrome 143 on Windows 10')
        cy.get('.string-major > a').should('have.text', 'Chrome 143 on Windows 10') // takes only the text

    }else if (Cypress.browser.name == 'firefox') {
        cy.get('.string-major').should('have.text','Firefox')
    }
});

it('DOM', () => { //puedes consultar propiedades booleanas - verdadero/falso de elementos del DOM
    cy.visit('https://demoqa.com/accordian')
    cy.get('.collapse').eq(6).tohen($element=>{ //hay 9 elementos como collapse en el DOM, el que queremos es el 7º
        cy.log(`state of the collapse when loading web: ${Cypress.dom.isVisible($element)}`) // --> true
    //when page is loaded, 1st element is visible, the other two do not - assertion should be TRUE, it IS visible
    })

    cy.get('#section1Heading').click(); // this hide the text - collapse

    cy.get('.collapse').eq(6).tohen($element=>{ //hay 9 elementos como collapse en el DOM, el que queremos es el 7º
    cy.log(`state of the collapse when click web: ${Cypress.dom.isVisible($element)}`) // --> false
    
    })
});

it.only('ARchitecture', () => {
    cy.log(Cypress.arch); // returns the processor architecture - x64
});
});