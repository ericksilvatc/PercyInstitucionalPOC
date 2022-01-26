/* global Given, When, Then, And */

import IdeasHomePage from '../page/IdeasHomePage'
const ideasHomePage = new IdeasHomePage


Given(/^que estou na home do TC Ideas$/, () => {
	ideasHomePage.abrirBrowser();
	ideasHomePage.aceitarCookies();
});

Then(/^valido a pagina inicial do Ideas$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
