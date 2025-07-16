describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.mercadolivre.com.br/')    
    cy.get('input[id="cb1-edit"]').type('livros{enter}')
  
  cy.origin('https://lista.mercadolivre.com.br', () => {
      cy.get('#shipping_highlighted_fulfillment').check({ force: true });
      cy.get('a.poly-component__title').eq(0).click();
      cy.get('span.andes-button__content').click();
    })
  })
})
