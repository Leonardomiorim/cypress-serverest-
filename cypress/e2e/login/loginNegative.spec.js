/// <reference types="cypress" />

describe('Login - Cenário Negativo', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('Deve exibir mensagens ao tentar logar sem preencher os campos', () => {
      cy.get('[data-testid="entrar"]').click();
      cy.fixture('messages').then((msg) => {
        cy.contains(msg.login.emailObrigatorio).should('be.visible');
        cy.contains(msg.login.senhaObrigatoria).should('be.visible');
      });
    });
  
    it('Deve exibir erro ao tentar logar com credenciais inválidas', () => {
      cy.login('invalido@teste.com', '123456');
      cy.contains('Email e/ou senha inválidos').should('be.visible');
    });
  });
  