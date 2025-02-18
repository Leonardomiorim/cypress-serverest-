Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="cadastrar"]').click();
  });
  