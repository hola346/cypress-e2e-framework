describe('Alias', () => {

    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
    })

it.skip('Take Small Modal', () => {

    //cy.get('#showSmallModal').should('have.text', 'Small modal')
    cy.get('[data-test="login-button"]').should('have.value','Login');
        cy.get('[data-test="login-button"]').then($button=>{
        const LoginButton =$button.text();
        cy.log (LoginButton);
    })

});
});

/*Cypress is asyncronous, this means if I want to catch the button text info - or any other from that button - I cannot do
it "on the fly", but need first to SAVE button info into a constant, then I can access to the text info. This is done by THEN*/

it.skip('Take text from the button', () => {
    cy.get('[data-test="login-button"]').then($button=>{
        const LoginButton =$button.text(); // text button is: 'Small modal'
        cy.log (LoginButton);

        $button.click(); //Now I can access and do actions to the button directly, like click - expecting pop up.
        //pop up opens, inspect on browser - F12, we see pop up id of title is: 'Small Modal'

        cy.get('#popup_title').contains(LoginButton,{matchCase:false})
        // we verify pop up title matches text button saved in a constant, not considering capital letters / case sensitive. 
    })


});

//If we attempt to use/ work with same constant in a different IT, we cannot do it. For this we can create an ALIAS

it('Aliases', function() {
   cy.get('[data-test="login-button"]').invoke('text').as('InvokeText')
   // this way we catch the button text and create an alias by AS, so we can reuse it later
   // ALIAS DEFINITON AND CALLS DO NOT WORK WITN => BUT WITH FUNCTION()
});

it('reusing previous alias', function() {
    cy.log("INVOKE: "+ this.InvokeText)  // Concatenate string + variable to be printed on log
    // You need to use THIS, text defined as alias is now available and will be printed on log
});

it('WRAP IT UP', () => {
// You can also reuse your text constant - variable using WRAP:
    cy.get('[data-test="login-button"]').invoke('text').as('InvokeText')
    cy.get('[data-test="login-button"]').then($button=>{
        const LoginButton =$button.text(); // text button is: 'Small modal'
        cy.log (LoginButton);

       cy.wrap(LoginButton).as('WrapText')
    })
});     

it('Wrap calling', () => {
    cy.log("INVOKE: "+ this.InvokeText)
    cy.log("WRAP: "+ this.WrapText) // both are the same

});
