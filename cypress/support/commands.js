
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { homePage } from "./pages/home.page"

// Cypress.Commands.add('newUser', (firstName, lastName, telefone, email, senha, novaSenha) => {
//     cy.get('[data-testid="firstName"]').type(firstName)
//     cy.get('[data-testid="lastName"]').type(lastName)
//     cy.get('[data-testid="phone"]').type(telefone)
//     cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(email)
//     cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(senha)
//     cy.get('[data-testid="repassword"]').type(novaSenha)
//     cy.get('[data-testid="create"]').click()  
      

// })

Cypress.Commands.add('carrinho', (email, senha) => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
    homePage.openMenu('Account')
    cy.get('[data-testid="email"]').type('teste@qa.ebac.br')
    cy.get('[data-testid="password"]').type('Teste@123')
    cy.get('[data-testid="btnLogin"]').click()
    cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
    cy.get('[data-testid="searchInput"]').type("Camiseta EBAC")
    cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    cy.get('[data-testid="completeCheckout"]').click()  
 })

 Cypress.Commands.add('buyProduct', () => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="email"]').type('teste@qa.ebac.br')
    cy.get('[data-testid="password"]').type('Teste@123')
    cy.get('[data-testid="btnLogin"]').click()
    cy.get('[href="/Tab/Browse"]').click()
    cy.get(':nth-child(3) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()    
    cy.get('[data-testid="productName"]').should('contain', 'Camiseta EBAC') 
 })

 Cypress.Commands.add('removeProduct', () => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="email"]').type('teste@qa.ebac.br')
    cy.get('[data-testid="password"]').type('Teste@123')
    cy.get('[data-testid="btnLogin"]').click()
    cy.get('[href="/Tab/Browse"]').click()
    cy.get(':nth-child(3) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click()
    cy.get('[data-testid="remove"]').click()      
    cy.get('[data-testid="emptyCart"]').should('contain', 'Your cart is empty')
 })

 Cypress.Commands.add('updateProduct', () => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
    cy.get('[href="/Tab/Account"]').click()
    cy.get('[data-testid="email"]').type('teste@qa.ebac.br')
    cy.get('[data-testid="password"]').type('Teste@123')
    cy.get('[data-testid="btnLogin"]').click()
    cy.get('[href="/Tab/Browse"]').click()
    cy.get(':nth-child(3) > .r-18u37iz > :nth-child(2) > [data-testid="productDetails"]').click()
    cy.get('[data-testid="addToCart"]').click() 
    cy.get('[data-testid="addItem"]').click() 
    cy.get('[data-testid="itemsQty"]').should('contain', '2')
 })
