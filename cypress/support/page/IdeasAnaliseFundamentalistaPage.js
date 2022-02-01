//const ambiente = Cypress.config("baseUrl")
import IdeasAnaliseFundamentalistaElements from '../elements/IdeasAnaliseFundamentalistaElements';

const ideasAnaliseFundamentalistaElements = new IdeasAnaliseFundamentalistaElements

 class IdeasAnaliseFundamentalistaPage {

    abrirBrowser (){
        cy.visit("/analise-fundamentalista");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasAnaliseFundamentalistaElements.btnAceitarCookies()).click();
    }


}
export default IdeasAnaliseFundamentalistaPage;