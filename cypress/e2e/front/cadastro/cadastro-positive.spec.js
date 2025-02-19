/// <reference types="cypress" />
/* global cy, describe, it, beforeEach, expect */
import {faker} from '@faker-js/faker';

describe('Cadastro - Cenário Positivo', () => {
	let usuario;

	beforeEach(() => {
		usuario = {
			nome: faker.person.firstName(),
			email: faker.internet.email(),
			senha: faker.internet.password(10, true),
		};
		cy.visit('/cadastrarusuarios');
	});

	it('Deve cadastrar um novo usuário com sucesso', () => {
		cy.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha);
		cy.contains('Cadastro realizado com sucesso').should('be.visible');
		cy.url().should('include', '/home');
	});
});
