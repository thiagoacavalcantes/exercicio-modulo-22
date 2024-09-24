/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
const cadastroPage = require("../support/pages/cadastro.page");
const { homePage } = require("../support/pages/home.page");

describe('Validar cadastro de um novo usuário', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });

  it('Deve criar um cadastro com sucesso', () => {
    homePage.openMenu('Account')
    cadastroPage.cadastro()
    homePage.openMenu('Account')
    cy.get('[data-testid="CustomerName"]').should('be.exist')
     
  })
})

 
