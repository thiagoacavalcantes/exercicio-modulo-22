/// <reference types="cypress" />

class ProdutctsPage {
   get #busca () { return cy.get('[href="/Tab/Browse"]')}
   get #produto () {return cy.get(':nth-child(3) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]')}
   get #add () {return cy.get('[data-testid="addToCart"]')}
   get #del () {return cy.get('[data-testid="remove"]')}
   get #update () { return cy.get('[data-testid="addItem"]')}
    produto(busca, produto, add, del, update) {
        this.#busca.click()
        this.#produto.click()
        this.#add.click()
        this.#del.click()
        this.#update.click()

        
    }
}

module.exports = new ProdutctsPage