/* global Given, When, Then, And */

import IdeasAnaliseFluxoPage from '../../page/Ideas/IdeasAnaliseFluxoPage'
const ideasAnaliseFluxoPage = new IdeasAnaliseFluxoPage


Given(/^que estou na pagina Ideas Analise Fluxo$/, () => {
	ideasAnaliseFluxoPage.abrirBrowser();
	ideasAnaliseFluxoPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Analise Fluxo$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
