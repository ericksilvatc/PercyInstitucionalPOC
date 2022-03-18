
const ambiente = Cypress.config("baseUrl")
import AIHomeElements from '../../elements/AI/AIHomeElements';

const aiHomeElements = new AIHomeElements

 class AIHomePage {

    abrirBrowser (){
        cy.visit(ambiente)
    }

    aceitarCookies(){
      cy.wait(2000)
      cy.contains(aiHomeElements.btnAceitarCookies()).click();
    }



}
export default AIHomePage;