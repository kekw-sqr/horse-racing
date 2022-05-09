

describe('horse racing test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays title', () => {
    cy.get('.title').should('contain', 'Blockchain Horse Racing')
  })

  it('jumps to game on Play button', () => {
    cy.get('.playButton').click()

    cy.location('href').should('contain', '/horse-racing')
    cy.contains('Horse A')
    cy.contains('Horse B')
    cy.contains('Horse C')
  })

  it('should place a bet icon', () => {
    cy.get('.playButton').click()

    cy.get('.horseState').should('have.length', 3).first().click()

    cy.get('.horseState').first().should('contain.html', 'betIcon')
  })
})
