/* global Given, When, Then, And */

import IdeasMaisComentadasPage from '../../page/Ideas/IdeasMaisComentadasPage'
const ideasMaisComentadasPage = new IdeasMaisComentadasPage


Given(/^que estou na pagina Ideas Mais Comentadas$/, () => {
	ideasMaisComentadasPage.abrirBrowser();
	ideasMaisComentadasPage.aceitarCookies();
});

Then(/^valido a pagina Ideas Mais Comentadas$/, () => {
	cy.screenshot();
	cy.percySnapshot();
});
