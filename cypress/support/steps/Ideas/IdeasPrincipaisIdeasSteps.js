/* global Given, When, Then, And */

import IdeasPrincipaisIdeasPage from '../page/IdeasPrincipaisIdeasPage'
const ideasPrincipaisIdeasPage = new IdeasPrincipaisIdeasPage


Given(/^que estou na pagina Ideas Principais Ideas$/, () => {
	ideasPrincipaisIdeasPage.abrirBrowser();
	ideasPrincipaisIdeasPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Principais Ideas$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
