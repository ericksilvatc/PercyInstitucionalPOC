/* global Given, When, Then, And */

import IdeasAnaliseFundamentalistaPage from '../page/IdeasAnaliseFundamentalistaPage'
const ideasAnaliseFundamentalistaPage = new IdeasAnaliseFundamentalistaPage


Given(/^que estou na pagina Ideas Analise Fundamentalista$/, () => {
	ideasAnaliseFundamentalistaPage.abrirBrowser();
	ideasAnaliseFundamentalistaPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Analise Fundamentalista$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
