describe('Add note', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('a[href="/add"]').click()
  })
  it('goes to the add page', () => {
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/add')
    })
  })

  it('focusses the textarea', () => {
    cy.get('textarea').should('be.focused')
  })

  it('goes to /notes and does not add a note on cancel', () => {
    cy.get('button.cancel').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
  })

  it('does not leave the page on save with no input', () => {
    cy.get('button.save').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/add')
    })
  })

  it('saves an entered note and displays it', () => {
    cy.get('textarea').type('This is a test note.')
    cy.get('button.save').click()
    cy.location().should(loc => {
      expect(loc.pathname).to.equal('/notes')
    })
    cy.get('main section')
      .contains('This is a test note.')
      .should('exist')
  })
})
