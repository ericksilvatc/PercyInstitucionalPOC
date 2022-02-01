/* global Given, When, Then, And */

import IdeasEmpresasPage from '../page/IdeasEmpresasPage'
const ideasEmpresasPage = new IdeasEmpresasPage


Given(/^que estou na pagina Ideas Empresas$/, () => {
	ideasEmpresasPage.abrirBrowser();
	ideasEmpresasPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Empresas$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
