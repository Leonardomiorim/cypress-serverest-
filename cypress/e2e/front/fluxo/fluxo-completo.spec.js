/// <reference types="cypress" />

/* global cy, describe, it, beforeEach, expect */
describe('Fluxo Completo - Adição e Limpeza de Produtos', () => {
	beforeEach(() => {
		cy.login(Cypress.env('validEmail'), Cypress.env('validPassword'));
	});

	it('Deve realizar o fluxo completo', () => {
		cy.acessarProduto();
		cy.adicionarProdutoNaLista();
		cy.adicionarProdutoNoCarrinho();

		// Retorna para a Lista de Compras antes de limpar a lista
		cy.retornarParaListaDeCompras();

		// Limpa a lista de compras
		cy.limparListaDeCompras();

		// Retorna à página inicial
		cy.retornarParaPaginaInicial();

		// Realiza o logout
		cy.logout();
	});
});

