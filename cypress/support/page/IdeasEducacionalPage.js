//const ambiente = Cypress.config("baseUrl")
import IdeasEducacionalElements from '../elements/IdeasEducacionalElements';

const ideasEducacionalElements = new IdeasEducacionalElements

 class IdeasEducacionalPage {

    abrirBrowser (){
        cy.visit("/educacional");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasEducacionalElements.btnAceitarCookies()).click();
    }


}
export default IdeasEducacionalPage;