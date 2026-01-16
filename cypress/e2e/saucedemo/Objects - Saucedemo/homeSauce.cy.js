import home_sauce_page, { typePassword, typeUsername } from "../home_sauce_page";
import Inventory_page_saucedemo from "../Inventory_page_saucedemo";  //importing classes previously defined

let username="standard_user";
let blockuser="locked_out_user";
let wronguser="XXX";
let empty_password=" ";
let password="secret_sauce";

describe('POM implementation', ()=>{

    beforeEach(()=>{

        cy.visit('https://www.saucedemo.com/');

    });

    it('Login', ()=>{
        home_sauce_page.typeUsername(username); // These 3 are methods within classes
        home_sauce_page.typePassword(password);
        home_sauce_page.PressLoginButton();
        Inventory_page_saucedemo.elements.TitleSpan().should('have.text','Products'); // This is a variable - 'elements'
        cy.url().should('contains', 'inventory')
    });

    it('Login - Blocked user', ()=>{
        home_sauce_page.typeUsername(blockuser); // These 3 are methods within classes
        home_sauce_page.typePassword(password);
        home_sauce_page.PressLoginButton();
        home_sauce_page.elements.ErrorMessage().should('contains.text','sadface'); // This is a variable - 'elements'
        //cy.url().should('contains', 'inventory')
    });

        it('Login - Wrong user', ()=>{
        home_sauce_page.typeUsername(wronguser); // These 3 are methods within classes
        home_sauce_page.typePassword(password);
        home_sauce_page.PressLoginButton();
        home_sauce_page.elements.ErrorMessage().should('contains.text','do not match'); // This is a variable - 'elements'
        //cy.url().should('contains', 'inventory')
    });

        it('Login - empty password', ()=>{
        home_sauce_page.typeUsername(username); // These 3 are methods within classes
        home_sauce_page.typePassword(empty_password);
        home_sauce_page.PressLoginButton();
        home_sauce_page.elements.ErrorMessage().should('contains.text','do not match'); // This is a variable - 'elements'
        //cy.url().should('contains', 'inventory')
    });

}); 