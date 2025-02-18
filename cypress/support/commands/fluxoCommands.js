Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/login'); // Garante que a navegação acontece
  cy.get('[data-testid="email"]', { timeout: 10000 }).should('be.visible').type(email);
  cy.get('[data-testid="senha"]').should('be.visible').type(senha);
  cy.get('[data-testid="entrar"]').click();
});

Cypress.Commands.add('acessarProduto', () => {
  cy.get('[data-testid="product-detail-link"]').eq(0).click();
  cy.url().should('include', '/detalhesProduto');
});

Cypress.Commands.add('adicionarProdutoNaLista', () => {
  cy.get('[data-testid="adicionarNaLista"]').click();
  cy.url().should('include', '/minhaListaDeProdutos');
});

Cypress.Commands.add('adicionarProdutoNoCarrinho', () => {
  cy.get('[data-testid="adicionar carrinho"]').click();
  cy.url().should('include', '/carrinho');
});

// NOVO: Retornar para lista antes de limpar
Cypress.Commands.add('retornarParaListaDeCompras', () => {
  cy.get('[data-testid="lista-de-compras"]').should('be.visible').click();
  cy.url().should('include', '/minhaListaDeProdutos');
});

// Ajustado: limpa lista após garantir a navegação correta
Cypress.Commands.add('limparListaDeCompras', () => {
  cy.get('[data-testid="limparLista"]').should('be.visible').click();
  cy.contains('Seu carrinho está vazio').should('be.visible');
});

// NOVO: Retornar para página inicial antes de logout
Cypress.Commands.add('retornarParaPaginaInicial', () => {
  cy.get('[data-testid="paginaInicial"]').should('be.visible').click();
  cy.url().should('include', '/home');
});

// Logout permanece o mesmo
Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="logout"]').should('be.visible').click();
  cy.url().should('include', '/login');
});
