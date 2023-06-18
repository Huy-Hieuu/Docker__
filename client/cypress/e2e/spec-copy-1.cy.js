/* eslint-disable no-undef */
describe('template spec', () => {
  beforeEach('visit passed', () => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  it('has h1 on this page', () => {
    cy.get('h1').should('exist');
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions');
  })

  it('renders a paragraph under the h1', () => {
    cy.get('.container').find('p').should('exist');
  });
  //can do first, last, equal
  it('check for the 2nd one contain p', () => {
    cy.get('.container').eq(2).find('p').should('exist');
  });

  it('check 2nd container includes h4 and p', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist')
      cy.get('p').should('exist')
    });
  });
})
