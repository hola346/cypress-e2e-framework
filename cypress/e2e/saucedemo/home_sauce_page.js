class homeSaucePage {

    elements = {  // Object  / variable definition

        UsernameInput: () => cy.get('#user-name'), //using ID field defined in HTML
        PasswordInput: () => cy.get('#password'),
        LoginButton: () => cy.get('#login-button'),
        ErrorMessage: () => cy.get('h3[data-test="error"]') // [] for data-test field within h3 tag from the HTML

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