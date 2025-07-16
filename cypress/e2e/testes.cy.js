describe('Testes no site do Mercado Livre', () => {
  it('passes', () => {
    cy.visit('https://www.mercadolivre.com.br/');
    cy.contains('button', 'Mais tarde', { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.get('input[id="cb1-edit"]').type('livros{enter}');

  
    cy.origin('https://lista.mercadolivre.com.br', () => {
      cy.get('#shipping_highlighted_fulfillment', { timeout: 20000 })
        .should('be.visible')
        .check({ force: true });

        cy.get('input[data-testid="Minimum-price"]').type('20');


       cy.get('input[data-testid="Maximum-price"]').type('100');

        cy.get('input[data-testid="Maximum-price"]').type('{enter}');

     
        cy.get('a.poly-component__title', { timeout: 10000 })
        .should('have.length.greaterThan', 0)
        .eq(0)
        .click();
    });

  
  });
});

