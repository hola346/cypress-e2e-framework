class ErrorMessagesBadLogin {

    elements = {  // Object  / variable definition
        ErrorMessage: () => cy.get('[data-test="error"]') //using ID field defined in HTML
        //'span[data-test="title"]'
        //.title
    }  
}

module.exports = new ErrorMessagesBadLogin();  // Any other class can import it