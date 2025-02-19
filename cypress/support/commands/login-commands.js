// Cypress/support/commands/loginCommands.js
Cypress.Commands.add('login', (email, senha) => {
	cy.get('[data-testid="email"]').type(email);
	cy.get('[data-testid="senha"]').type(senha);
	cy.get('[data-testid="entrar"]').click();

	// Aguarda o redirecionamento, independente de ser login bem-sucedido ou não
	cy.url().then(url => {
		if (url.includes('/home')) {
			cy.url().should('include', '/home');
		} else {
			cy.url().should('include', '/login');
		}
	});
});

