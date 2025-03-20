/// <reference types="cypress" />

describe('Validar Cy Intercept', () => {
    beforeEach(() => {
      cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
      cy.visit('/')
    })

    it('Deve adicionar um produto ao carrinho com sucesso', () => {
      cy.intercept('GET', '**/public/getProducts?limit=10&skip=0', {fixture: 'products.json'}).as('getProducts')
      cy.buyProduct()      
    });

    it('Deve remover um produto do carrinho com sucesso', () => {
      cy.intercept('GET', '**/public/getCart?userId=67d826ee712a3b283621b02c', {fixture: 'cart.json'}).as('getCart')
      cy.removeProduct()        
    });

    it('Deve atualizar a quantidade de um produto no carrinho com sucesso', () => {
      cy.intercept('GET', '**/public/getCart?userId=67d826ee712a3b283621b02c', {fixture: 'cart.json'}).as('updateCart')
      cy.updateProduct()
    });
               
    
});