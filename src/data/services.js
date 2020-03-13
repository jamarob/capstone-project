const NOTES_KEY = 'NOTES'
const SEARCH_TERM_KEY = 'SEARCH_TERM'

export function loadNotes() {
  return JSON.parse(localStorage.getItem(NOTES_KEY)) ?? []
}

export function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
}

export function loadSearchTerm() {
  return localStorage.getItem(SEARCH_TERM_KEY) ?? ''
}

export function saveSearchTerm(searchTerm) {
  localStorage.setItem(SEARCH_TERM_KEY, searchTerm)
}
