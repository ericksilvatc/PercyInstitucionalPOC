/* global Given, When, Then, And */

import IdeasMaisRecentesPage from '../../page/Ideas/IdeasMaisRecentesPage'
const ideasMaisRecentesPage = new IdeasMaisRecentesPage


Given(/^que estou na pagina Ideas Mais Recentes$/, () => {
	ideasMaisRecentesPage.abrirBrowser();
	ideasMaisRecentesPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Mais Recentes$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
