Cypress.Commands.add('listarProdutos', () => {
	cy.request({
		method: 'GET',
		url: `${Cypress.env('apiUrl')}/produtos`,
		failOnStatusCode: false,
	});
});

Cypress.Commands.add('cadastrarProduto', produto => {
	const usuarioAdmin = {
		email: 'beltrano@qa.com.br',
		password: 'teste',
	};

	cy.request('POST', `${Cypress.env('apiUrl')}/login`, usuarioAdmin)
		.then(response => {
			const token = response.body.authorization;

			cy.request({
				method: 'POST',
				url: `${Cypress.env('apiUrl')}/produtos`,
				headers: {
					Authorization: token,
				},
				body: produto,
				failOnStatusCode: false,
			});
		});
});

Cypress.Commands.add('buscarProdutoPorId', id => {
	cy.request({
		method: 'GET',
		url: `${Cypress.env('apiUrl')}/produtos/${id}`,
		failOnStatusCode: false,
	});
});

Cypress.Commands.add('excluirProduto', (id, token) => {
	cy.request({
		method: 'DELETE',
		url: `${Cypress.env('apiUrl')}/produtos/${id}`,
		headers: {
			Authorization: token,
		},
		failOnStatusCode: false,
	});
});

Cypress.Commands.add('editarProduto', (id, produto) => {
	cy.get('@token').then(token => {
		cy.request({
			method: 'PUT',
			url: `${Cypress.env('apiUrl')}/produtos/${id}`,
			headers: {
				Authorization: token,
			},
			body: produto,
			failOnStatusCode: false,
		});
	});
});
