Cypress.Commands.add('validarMenuSuperior', () => {
	cy.get('[data-testid="home"]').should('be.visible').click();
	cy.url().should('include', '/home');

	cy.get('[data-testid="lista-de-compras"]').should('be.visible').click();
	cy.url().should('include', '/minhaListaDeProdutos');

	cy.get('[data-testid="carrinho"]').should('be.visible').click();
	cy.url().should('include', '/carrinho');
});

