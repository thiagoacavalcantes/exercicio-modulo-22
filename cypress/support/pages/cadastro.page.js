/// <reference types="cypress" />
import { faker } from '@faker-js/faker';



class CadastroPage {
    get #btnSign () { return cy.get('[data-testid="signUp"] > .css-146c3p1') }
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName () { return cy.get('[data-testid="lastName"]') }
    get #telefone () { return cy.get('[data-testid="phone"]') }
    get #email () { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #senha () { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #novaSenha () { return cy.get('[data-testid="repassword"]') }
    get #btnCriar () { return cy.get('[data-testid="create"]') }



    cadastro(btnSign, firstName, lastName, telefone, email, senha, novaSenha, btnCriar){
        this.#btnSign.click()
        this.#firstName.type(faker.person.firstName())
        this.#lastName.type(faker.person.lastName())
        this.#telefone.type(11123456789)
        this.#email.type(faker.internet.email())
        this.#senha.type('Teste@123')
        this.#novaSenha.type('Teste@123')
        this.#btnCriar.click()
    }
}

module.exports = new CadastroPage