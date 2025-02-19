/// <reference types="cypress" />
/* global cy, describe, it, beforeEach, expect */
describe('Menu Superior - Validação de Navegação', () => {
	beforeEach(() => {
		cy.login(Cypress.env('validEmail'), Cypress.env('validPassword'));
	});

	it('Deve validar a navegação do menu', () => {
		cy.validarMenuSuperior();
	});
});
