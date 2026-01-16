import home_sauce_page from "./CLASS_home_sauce_page";
import Inventory_page_saucedemo from "./CLASS_Inventory_page_saucedemo";  //importing classes previously defined
import Error_Messages_Login from "./CLASS_Error_messages_saucedemo";

describe('POM implementation', ()=>{

    beforeEach(function(){  // WITH => IT DOES NOT WORK, you should use - function()
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('Users_and_passwords')  
        .then(Userpass =>{
        this.Userpass=Userpass; // Haces esto para poder instanciar (abajo) las variables definidas en el JSON
    });
    });

    it('Login', function(){ // -------- WITH => IT DOES NOT WORK, you should use - function()
        home_sauce_page.typeUsername(this.Userpass.standard_user);
        home_sauce_page.typePassword(this.Userpass.password);
        home_sauce_page.PressLoginButton();
        Inventory_page_saucedemo.elements.TitleSpan().should('have.text', 'Products')
    });

    it('Login - Blocked user', function(){
        home_sauce_page.typeUsername(this.Userpass.locked_out_user);
        home_sauce_page.typePassword(this.Userpass.password);
        home_sauce_page.PressLoginButton();
        Error_Messages_Login.elements.ErrorMessage().should('contains.text', 'this user has been locked out')
        //Inventory_page_saucedemo.elements.TitleSpan().should('have.text', 'Products')
    });

    it('Login - Wrong user', function(){
        home_sauce_page.typeUsername(this.Userpass.wrong_user);
        home_sauce_page.typePassword(this.Userpass.password);
        home_sauce_page.PressLoginButton();
        Error_Messages_Login.elements.ErrorMessage().should('contains.text', 'Username and password do not match')
    });

    it('Login - empty password', function(){
        home_sauce_page.typeUsername(this.Userpass.standard_user);
        home_sauce_page.typePassword(this.Userpass.wrong_password);
        home_sauce_page.PressLoginButton();
        Error_Messages_Login.elements.ErrorMessage().should('contains.text', 'Username and password do not match')
    });

}); 