describe('sqr project e2e test', () => {
  before(() => {
    cy.setupMetamask()
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully makes a deposit', async () => {
    cy.get('#play-button').click()

    cy.get('#connect-wallet').click()
    cy.get('#connector-metamask').click()

    cy.acceptMetamaskAccess(false)

    cy.contains('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')

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

    cy.wait(100000000)
  })

  // it('jumps to game on Play button', () => {
  //   cy.get('.playButton').click()
  //
  //   cy.location('href').should('contain', '/horse-racing')
  //   cy.contains('Horse A')
  //   cy.contains('Horse B')
  //   cy.contains('Horse C')
  // })
  //
  // it('should place a bet icon', () => {
  //   cy.get('.playButton').click()
  //
  //   cy.get('.horseState').should('have.length', 3).first().click()
  //
  //   cy.get('.horseState').first().should('contain.html', 'betIcon')
  // })
})
