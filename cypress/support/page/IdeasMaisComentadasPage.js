//const ambiente = Cypress.config("baseUrl")
import IdeasMaisComentadasElements from '../elements/IdeasMaisComentadasElements';

const ideasMaisComentadasElements = new IdeasMaisComentadasElements

 class IdeasMaisComentadasPage {

    abrirBrowser (){
        cy.visit("/mais-comentadas");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasMaisComentadasElements.btnAceitarCookies()).click();
    }


}
export default IdeasMaisComentadasPage;