/// <reference types="cypress" />

describe('Testes de API - Login', () => {

  const validEmail = Cypress.env('validEmail');
  const validPassword = Cypress.env('validPassword');
  const invalidEmail = 'invalido@teste.com';
  const invalidPassword = 'senhaErrada';

  it('Deve realizar login com sucesso e retornar token', () => {
    cy.apiLogin(validEmail, validPassword).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization').and.to.not.be.empty;
    });
  });

  it('Deve falhar ao tentar login com credenciais inválidas', () => {
    cy.apiLogin(invalidEmail, invalidPassword).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });

  it('Deve falhar ao tentar login sem fornecer email e senha', () => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}/login`,
      body: {},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      cy.log('Response Body:', JSON.stringify(response.body));

      // Verificar se há uma mensagem de erro apropriada
      if (response.body && typeof response.body === 'object') {
        const errorMessages = Object.values(response.body);
        expect(errorMessages).to.include('email é obrigatório');
      } else {
        expect(response.body).to.be.a('string').and.to.include('email é obrigatório');
      }
    });
  });
});

  
  