// Cypress Command - Login API
Cypress.Commands.add('apiLogin', (email, password) => {
	cy.request({
		method: 'POST',
		url: `${Cypress.env('apiUrl')}/login`,
		body: {
			email,
			password,
		},
		failOnStatusCode: false,
	});
});
