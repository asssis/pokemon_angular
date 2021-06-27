import { createViewChild } from "@angular/compiler/src/core"

describe('My First Test', () => {
  it('Testando pasta 1', () => {
    cy.visit('/');
    cy.contains('BUSCAR');
  })

  it('Testando pasta 2', () => {
    cy.visit('/detail/ex3-1');
    cy.contains('Absol');
  })

  it('Fazendo fluxo de navegação', () => {
    cy.visit('/')
    cy.contains('BUSCAR');
    cy.get('app-card');
    cy.get('app-card:first').click();
    cy.contains('Atacks');
    cy.contains('Bad News');
    cy.get('.btn-pokerball').click();
    cy.contains('BUSCAR');
    cy.get('app-card');
  })
})
