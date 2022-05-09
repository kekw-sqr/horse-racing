describe('sqr project e2e test', () => {
  before(() => {
    cy.setupMetamask()
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully makes a deposit', () => {
    cy.get('#play-button').click()

    cy.get('#connect-wallet').click()
    cy.get('#connector-metamask').click()

    cy.acceptMetamaskAccess(false)

    const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
    cy.contains(address)

    cy.get('#mint-button').click()
    cy.confirmMetamaskTransaction()

    cy.get('#deposit-amount').type('100')
    cy.get('#deposit-button').click()
    cy.confirmMetamaskPermissionToSpend()
    cy.confirmMetamaskTransaction()

    cy.get('#bet-amount').type('10')
    cy.get('#make-bet-button').click()
    cy.confirmMetamaskTransaction()

    cy.get('#finalize-button').click()
    cy.confirmMetamaskTransaction()

    cy.wait(10000)

    cy.get('.history .row').should('have.length', 2)
    cy.get('.history .row').first().should('contain', address)
  })
})
