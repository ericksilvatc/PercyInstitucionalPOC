//const ambiente = Cypress.config("baseUrl")
import IdeasAnaliseTecnicaElements from '../elements/IdeasAnaliseTecnicaElements';

const ideasAnaliseTecnicaElements = new IdeasAnaliseTecnicaElements

 class IdeasAnaliseTecnicaPage {

    abrirBrowser (){
        cy.visit("/analise-tecnica");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasAnaliseTecnicaElements.btnAceitarCookies()).click();
    }


}
export default IdeasAnaliseTecnicaPage;