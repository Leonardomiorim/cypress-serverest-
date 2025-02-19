/// <reference types="cypress" />
/* global cy, describe, it, beforeEach, expect */
describe('Login - Cenário Positivo', () => {
	beforeEach(() => {
		cy.visit('/login');
	});

	it('Deve realizar login com sucesso', () => {
		cy.login(Cypress.env('validEmail'), Cypress.env('validPassword'));
		cy.url().should('include', '/home');
		cy.contains('Home').should('be.visible');
	});
});
