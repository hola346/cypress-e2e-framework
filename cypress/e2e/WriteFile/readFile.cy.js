const url='https://api.mydummyapi.com/categories/crypto';
const url2='https://api.mydummyapi.com/todos';
const filePath='cypress/fixtures/Read-write/read-write.json';

describe('Write/Read', ()=>{
    it('Add API response to a JSON file',()=>{
        cy.request('GET', url)
            .then(response =>{
                cy.log(response.body);
                cy.writeFile(filePath, response.body);  // Escribe json file en fichero
                //cy.readFile(filePath).then(cy.writeFile(filePath, "//Here CRYPTOS, then, TODOS"))
                /*cy.readFile(filePath).then((update) => {
                    update="//Here CRYPTOS, THEN TODOS";
                    cy.writeFile(filePath, update);
                })   --->> Intento de append file*/
            });

    });

    it.skip('Add line', () => {

        cy.writeFile(filePath, '//Info Hub for Testers', { flag: 'a+' }) 
        // THAT'S THE WAY - APPEND - flag a-------------------------------------------------
        //cy.readFile(filePath).then(cy.writeFile(filePath, "Hello"))
            
    });

    it('Upgrade JSON', () => {
       cy.request('GET', url2)
        .its('body')  // Takes JSON but does not write by the moment
        .each(object => {  // 1st we READ ALL elements existing in JSON, THEN -> we WRITE - APPEND new JSON
            cy.log(object) // Object is each TODO, from URL2
            cy.readFile(filePath).then(array=>{ //First we READ the whole file, THEN we create an ARRAY variable writing each
                array.push(object)
                cy.writeFile(filePath, array)
            })
        })
    });

    
});