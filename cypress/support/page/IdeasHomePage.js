const ambiente = Cypress.config("baseUrl")
import IdeasHomeElements from '../elements/IdeasHomeElements';

const ideasHomeElements = new IdeasHomeElements

 class IdeasHomePage {

    abrirBrowser (){
        cy.visit(ambiente)
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasHomeElements.btnAceitarCookies()).click();
    }



}
export default IdeasHomePage;