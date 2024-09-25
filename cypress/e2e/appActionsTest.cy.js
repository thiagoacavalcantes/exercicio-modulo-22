/// <reference types="cypress" />


const {email, senha} = require('../fixtures/data.json')


describe('Validar fluxo do carrinho de compras com AppActions', () => {

    it('Deve finalizar uma compra de carrinho de comprar', () => {
       cy.carrinho()
       cy.contains('Order Success').should('have.attr', 'class', 'css-146c3p1')
       
       
    });
});