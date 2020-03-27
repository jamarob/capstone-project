import { putNotes, postNote } from '../../src/util/services'

describe('Undo operation', () => {
  const testNote = {
    id: '5e7e6a93916cc409e1785c0f',
    text: 'This is an undo delete test note',
    created: '2020-03-27T21:05:23.667581Z',
    edited: '2020-03-27T21:05:23.667581Z',
  }
  const deleteButtonFirstNote = '[class^="Note__ActionLinks"] :first-child'

  beforeEach(() => {
    cy.wrap(putNotes([testNote]))
    cy.visit('/')
    cy.get(deleteButtonFirstNote)
      .first()
      .click()
  })

  afterEach(() => cy.wrap(putNotes([])))

  it('does not have the test note', () => {
    cy.contains(testNote.text).should('not.exist')
  })

  it('undoes the delete', () => {
    cy.get('button')
      .first()
      .click()
    cy.contains(testNote.text).should('exist')
  })

  it('dismisses the undo dialog', () => {
    cy.get('header ~ section svg').click()
    cy.contains('Note deleted').should('not.exist')
  })
})
