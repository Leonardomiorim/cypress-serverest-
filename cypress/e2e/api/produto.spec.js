describe('Testes de API - Produtos', () => {
    it('Deve listar produtos cadastrados', () => {
        cy.listarProdutos().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.produtos).to.be.an('array');
            expect(response.body.produtos[0]).to.have.property('nome');
            expect(response.body.produtos[0]).to.have.property('preco');
            expect(response.body.produtos[0]).to.have.property('descricao');
            expect(response.body.produtos[0]).to.have.property('quantidade');
            expect(response.body.produtos[0]).to.have.property('_id');
        });
    });
  
    beforeEach(() => {
      const usuario = {
          email: "beltrano@qa.com.br",
          password: "teste"
      };
  
      cy.request('POST', `${Cypress.env('apiUrl')}/login`, usuario)
          .then((response) => {
              expect(response.status).to.eq(200);
              cy.wrap(response.body.authorization).as('token'); // Define o alias corretamente
          });
  });
  
    it('Deve cadastrar um novo produto com sucesso', () => {
      const produto = {
          nome: `Produto Teste ${Date.now()}`,
          preco: 100,
          descricao: "Descrição de teste",
          quantidade: 50
      };
  
      cy.cadastrarProduto(produto).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body.message).to.eq("Cadastro realizado com sucesso");
          expect(response.body).to.have.property('_id');
      });
    });
  
    it('Deve buscar um produto pelo ID', () => {
    const produto = {
        nome: `Produto Teste ${Date.now()}`,
        preco: 200,
        descricao: "Mouse de teste",
        quantidade: 10
      };
  
    cy.cadastrarProduto(produto).then((response) => {
        const produtoId = response.body._id;
  
        cy.buscarProdutoPorId(produtoId).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('nome', produto.nome);
            expect(response.body).to.have.property('preco', produto.preco);
            expect(response.body).to.have.property('descricao', produto.descricao);
            expect(response.body).to.have.property('quantidade', produto.quantidade);
            expect(response.body).to.have.property('_id', produtoId);
          });
      });
    });
  
      it('Deve excluir um produto existente', function () {
      const produto = {
          nome: `Produto Teste ${Date.now()}`,
          preco: 100,
          descricao: "Descrição de teste",
          quantidade: 50
      };
  
      cy.cadastrarProduto(produto).then((response) => {
          const produtoId = response.body._id;
  
          // Passa o token diretamente
          cy.excluirProduto(produtoId, this.token).then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body.message).to.include("Registro excluído com sucesso");
          });
      });
    });
  
      it('Deve editar um produto existente', () => {
      const produto = {
          nome: `Produto Editado ${Date.now()}`,
          preco: 150,
          descricao: "Descrição editada",
          quantidade: 30
      };
  
      cy.cadastrarProduto(produto).then((response) => {
          const produtoId = response.body._id;
  
          const produtoEditado = {
              nome: `Produto Editado ${Date.now()}`,
              preco: 200,
              descricao: "Descrição editada com sucesso",
              quantidade: 100
          };
  
          cy.editarProduto(produtoId, produtoEditado).then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body.message).to.eq("Registro alterado com sucesso");
          });
  
          cy.buscarProdutoPorId(produtoId).then((response) => {
              expect(response.status).to.eq(200);
              expect(response.body).to.have.property('nome', produtoEditado.nome);
              expect(response.body).to.have.property('preco', produtoEditado.preco);
              expect(response.body).to.have.property('descricao', produtoEditado.descricao);
              expect(response.body).to.have.property('quantidade', produtoEditado.quantidade);
          });
      });
    });
  });  