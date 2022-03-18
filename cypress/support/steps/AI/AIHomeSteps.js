/* global Given, When, Then, And */

import AIHomePage from '../../page/AI/AIHomePage'
const aiHomePage = new AIHomePage


Given(/^que estou na home Analise de Investimentos$/, () => {
	aiHomePage.abrirBrowser();
	aiHomePage.aceitarCookies();
});

Then(/^valido a pagina inicial Analise de Investimentos$/, () => {
	cy.screenshot();

});
