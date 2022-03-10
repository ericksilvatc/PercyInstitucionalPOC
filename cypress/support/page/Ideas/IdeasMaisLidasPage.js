//const ambiente = Cypress.config("baseUrl")
import IdeasMaisLidasElements from '../elements/IdeasMaisLidasElements';

const ideasMaisLidasElements = new IdeasMaisLidasElements

 class IdeasMaisLidasPage {

    abrirBrowser (){
        cy.visit("/mais-lidas");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.contains(ideasMaisLidasElements.btnAceitarCookies()).click();
    }


}
export default IdeasMaisLidasPage;