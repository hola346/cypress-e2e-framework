// Topics: 
// -> Describe and Context 
// -> IT and Specify
// -> Unit Test Demo

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply = (a,b) => a*b;            //esto son funciones definidas, con 2 params de entrada

// Describe o context ->
describe ('Unit test', () => {
    context('Math with NATURAL numbers', () => {    //  a esto se le llama callback function
        // IT - Specify
        it('add postive numbers', ()=> {
            expect(add(1,2)).to.eq(3);
        }); 
        it('add subtract numbers', ()=> {
            expect(subtract(4,2)).to.eq(2);
        }); 
        it('add divide numbers', ()=> {
            expect(divide(4,2)).to.eq(2);
        }); 
        it('add multiply numbers', ()=> {
            expect(multiply(4,2)).to.eq(8);
        }); 
    })
});

describe('Math with DECIMAL numbers', () => {
        it('add postive decimal numbers', ()=> {
            expect(add(1.2,2.2)).to.eq(3.4);
        }); 
        it('add subtract decimal numbers', ()=> {
            expect(subtract(2.5,2.2)).to.eq(0.3);
        }); 

});