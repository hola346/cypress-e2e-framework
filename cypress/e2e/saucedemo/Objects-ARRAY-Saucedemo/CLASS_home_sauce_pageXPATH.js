class homeSaucePage {

    elements = {  // Object  / variable definition
        UsernameInput: () => cy.xpath('//input[@data-test="username"]'), //Xpath - selector input - value atrib
        PasswordInput: () => cy.xpath('//input[@data-test="password" or @id="password"]'), //si cambia uno, encuentras el otro
        //LoginButton: () => cy.xpath('//input[@name="login-button"]'),
        LoginButton: () => cy.xpath('//*[@type="submit"]'), // ves a cualquier type del html cuyo valor sea submit
        ErrorMessage: () => cy.xpath('//*[@data-test="error"]') // podrías poner sólo tag //h3, sólo hay 1
    }  

    typeUsername(Username){   // method defined, using variable previously defined
        this.elements.UsernameInput().type(Username)
    }

    typePassword(Password){   // method defined, using variable previously defined
        this.elements.PasswordInput().type(Password)
    }

    PressLoginButton(){   // method defined, using variable previously defined
        this.elements.LoginButton().click()
    }

}

module.exports = new homeSaucePage();  // Any other class can import it