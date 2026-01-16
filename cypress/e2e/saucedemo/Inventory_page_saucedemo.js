class InventoryPage {

    elements = {  // Object  / variable definition

        TitleSpan: () => cy.get('span[data-test="title"]') //using ID field defined in HTML
        //'span[data-test="title"]'
        //.title

    }  

}

module.exports = new InventoryPage();  // Any other class can import it