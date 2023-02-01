describe('UserForm e2e test', () => {
  it('Check form function', () => {
    cy.visit('/unit')

    // form
    cy.findByPlaceholderText('Please input username').type('123')
    cy.findByPlaceholderText('Please input password').type('123')
    cy.findByText('submit form').click()

    cy.contains('1').should('be.visible')
  })
})

export {}
