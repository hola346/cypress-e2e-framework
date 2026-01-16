//import home_sauce_page from "./CLASS_home_sauce_page"; //puedes hacerlo con require y guardar clase en constante:
const home_sauce_page = require('./CLASS_home_sauce_pageXPATH');
import Inventory_page_saucedemo from "./CLASS_Inventory_page_saucedemo";  //importing classes previously defined
import Error_Messages_Login from "./CLASS_Error_messages_saucedemo";

const JSONwithAllUserCases = require ('../../../fixtures/Data-Driven Test/Multi_test.json') // similar to Fixture, keeps json in constant
// difference is: here there's an ARRAY of data - different data with SAME structure - you'll need to access to it
// as a BLOCK. With FIXTURES, there's diff variables, you can access to each of them independently, as local variables

describe('Multi IT Home Saucedemo', ()=>{

    beforeEach(function(){  // WITH => IT DOES NOT WORK, you should use - function()
        cy.visit('https://www.saucedemo.com/');
  
    });

    JSONwithAllUserCases.forEach(UserCase=>{  // For each group of data in JSON {}, in this case, 4 times
        
        it('General IT for ALL', function(){
                home_sauce_page.typeUsername(UserCase.User);
                home_sauce_page.typePassword(UserCase.Pass);
                home_sauce_page.PressLoginButton();
                //Inventory_page_saucedemo.elements.TitleSpan().should('have.text', 'Products')

                if(UserCase.testname == "Login_OK"){
                    Inventory_page_saucedemo.elements.TitleSpan().should('have.text', UserCase.Expect) 
                    // User goes to Inv page from Home as Login was successful
                }
                /*
                else if(UserCase.UserCasename == "Login_Blocked_user"){
                    Error_Messages_Login.elements.ErrorMessage().should('contains.text', UserCase.Expect)
                }
                else if(UserCase.UserCasename == "Login_Wrong user"){
                    Error_Messages_Login.elements.ErrorMessage().should('contains.text', UserCase.Expect)
                }
                */ // No need detail all cases, if Login not OK, same verification is done for the rest of cases
                else{
                    Error_Messages_Login.elements.ErrorMessage().should('contains.text', UserCase.Expect)
                }
                // Rest of cases you remain in Home page, verifying same message box, only message is diff for each case
        }) 
    })



})