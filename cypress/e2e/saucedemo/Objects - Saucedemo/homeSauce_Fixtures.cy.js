import home_sauce_page from "../home_sauce_page";
import Inventory_page_saucedemo from "../Inventory_page_saucedemo";  //importing classes previously defined

const tests = require('../../../fixtures/fixtures2/Credentials.json');

describe('Sauce Home Demo Page', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/');
    });


tests.forEach(test=>{
    it(test.name, ()=>{
        home_sauce_page.typeUsername(test.username);
        home_sauce_page.typePassword(test.password);
        home_sauce_page.PressLoginButton();

        if(test.name === 'Login'){
            Inventory_page_saucedemo.elements.TitleSpan().should('have.text','Products'); 
        }
        else{
            home_sauce_page.elements.ErrorMessage().should('contains.text','sadface');
        };

    });
});

});
