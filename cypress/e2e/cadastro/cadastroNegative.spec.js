/// <reference types="cypress" />

describe('Cadastro - Cenário Negativo', () => {
    beforeEach(() => {
      cy.visit('/cadastrarusuarios');
    });
  
    it('Deve exibir mensagens ao tentar cadastrar sem preencher os campos', () => {
      cy.get('[data-testid="cadastrar"]').click();
      cy.fixture('messages').then((msg) => {
        cy.contains(msg.cadastro.nomeObrigatorio).should('be.visible');
        cy.contains(msg.cadastro.emailObrigatorio).should('be.visible');
        cy.contains(msg.cadastro.senhaObrigatoria).should('be.visible');
      });
    });
  
    it('Deve exibir erro ao tentar cadastrar um usuário duplicado', () => {
      cy.cadastrarUsuario('Leonardo', 'leonardo@teste.com.br', '123123');
      cy.contains('Este email já está sendo usado').should('be.visible');
    });
  });
  