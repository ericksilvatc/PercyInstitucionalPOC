/* global Given, When, Then, And */

import IdeasMaisLidasPage from '../../page/Ideas/IdeasMaisLidasPage'
const ideasMaisLidasPage = new IdeasMaisLidasPage


Given(/^que estou na pagina Ideas Mais Lidas$/, () => {
	ideasMaisLidasPage.abrirBrowser();
	ideasMaisLidasPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Mais Lidas$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
