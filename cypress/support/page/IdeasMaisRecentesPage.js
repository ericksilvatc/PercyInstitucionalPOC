//const ambiente = Cypress.config("baseUrl")
import IdeasMaisRecentesElements from '../elements/IdeasMaisRecentesElements';

const ideasMaisRecentesElements = new IdeasMaisRecentesElements

 class IdeasMaisRecentesPage {

    abrirBrowser (){
        cy.visit("/mais-recentes");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasMaisRecentesElements.btnAceitarCookies()).click();
    }


}
export default IdeasMaisRecentesPage;