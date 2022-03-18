//const ambiente = Cypress.config("baseUrl")
import IdeasMaisRecentesElements from '../../elements/Ideas/IdeasMaisRecentesElements';

const ideasMaisRecentesElements = new IdeasMaisRecentesElements

 class IdeasMaisRecentesPage {

    abrirBrowser (){
        cy.visit("/mais-recentes");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.contains(ideasMaisRecentesElements.btnAceitarCookies()).click();
    }


}
export default IdeasMaisRecentesPage;