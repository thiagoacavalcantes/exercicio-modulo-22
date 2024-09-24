/// <reference types="cypress" />


const {email, senha} = require('../fixtures/data.json')


describe('Validar fluxo do carrinho de compras com AppActions', () => {

    it('Deve finalizar uma compra de carrinho de comprar', () => {
       cy.carrinho()
       cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > [style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1').should('contain', 'Order Success') 
       
    });
});