//const ambiente = Cypress.config("baseUrl")
import IdeasAnaliseFundamentalistaElements from '../../elements/Ideas/IdeasAnaliseFundamentalistaElements';

const ideasAnaliseFundamentalistaElements = new IdeasAnaliseFundamentalistaElements

 class IdeasAnaliseFundamentalistaPage {

    abrirBrowser (){
        cy.visit("/analise-fundamentalista");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.contains(ideasAnaliseFundamentalistaElements.btnAceitarCookies()).click();
    }


}
export default IdeasAnaliseFundamentalistaPage;