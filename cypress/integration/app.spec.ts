import '@percy/cypress';

describe('home page', () => {
    it('should have paragraph tag', () => {
        cy.visit('/')
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
        
    // Take a snapshot for visual diffing
    cy.percySnapshot();

    });
});