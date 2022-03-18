/* global Given, When, Then, And */

import IdeasAnaliseTecnicaPage from '../../page/Ideas/IdeasAnaliseTecnicaPage'
const ideasAnaliseTecnicaPage = new IdeasAnaliseTecnicaPage


Given(/^que estou na pagina Ideas Analise Tecnica$/, () => {
	ideasAnaliseTecnicaPage.abrirBrowser();
	ideasAnaliseTecnicaPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Analise Tecnica$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
