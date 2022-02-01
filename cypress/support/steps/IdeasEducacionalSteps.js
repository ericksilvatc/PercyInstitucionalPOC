/* global Given, When, Then, And */

import IdeasEducacionalPage from '../page/IdeasEducacionalPage'
const ideasEducacionalPage = new IdeasEducacionalPage


Given(/^que estou na pagina Ideas Educacional$/, () => {
	ideasEducacionalPage.abrirBrowser();
	ideasEducacionalPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Educacional$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
