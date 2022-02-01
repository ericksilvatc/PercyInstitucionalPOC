//const ambiente = Cypress.config("baseUrl")
import IdeasAnaliseFluxoElements from '../elements/IdeasAnaliseFluxoElements';

const ideasAnaliseFluxoElements = new IdeasAnaliseFluxoElements

 class IdeasAnaliseFluxoPage {

    abrirBrowser (){
        cy.visit("/analise-de-fluxo");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasAnaliseFluxoElements.btnAceitarCookies()).click();
    }


}
export default IdeasAnaliseFluxoPage;