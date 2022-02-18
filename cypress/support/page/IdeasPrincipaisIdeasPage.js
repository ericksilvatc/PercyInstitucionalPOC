//const ambiente = Cypress.config("baseUrl")
import IdeasPrincipaisIdeasElements from '../elements/IdeasPrincipaisIdeasElements';

const ideasPrincipaisIdeasElements = new IdeasPrincipaisIdeasElements

 class IdeasPrincipaisIdeasPage {

    abrirBrowser (){
        cy.visit("/principais-ideas");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.contains(ideasPrincipaisIdeasElements.btnAceitarCookies()).click();
    }


}
export default IdeasPrincipaisIdeasPage;