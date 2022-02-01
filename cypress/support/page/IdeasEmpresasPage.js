//const ambiente = Cypress.config("baseUrl")
import IdeasEmpresasElements from '../elements/IdeasEmpresasElements';

const ideasEmpresasElements = new IdeasEmpresasElements

 class IdeasEmpresasPage {

    abrirBrowser (){
        cy.visit("/empresas/PETR4");
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.get(ideasEmpresasElements.btnAceitarCookies()).click();
    }


}
export default IdeasEmpresasPage;