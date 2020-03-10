import { useState, useEffect } from 'react'
import { getNotes } from '../data/services'
import uid from 'uid'

export default function useNotes() {
  // eslint-disable-next-line
  const [originalNotes, setOriginalNotes] = useState(getNotes())
  const [notes, setNotes] = useState(originalNotes)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setSearchTerm(searchTerm)
    setNotes(originalNotes.filter(note => note.text.includes(searchTerm)))
  }, [originalNotes, searchTerm])

  function addNote(note) {
    setOriginalNotes([{ id: uid(32), ...note }, ...originalNotes])
  }

  function findNote(id) {
    return originalNotes.find(note => note.id === id)
  }

  function deleteNote(id) {
    setOriginalNotes(originalNotes.filter(note => note.id !== id))
  }

  return {
    notes,
    searchNotes: setSearchTerm,
    searchTerm,
    addNote,
    findNote,
    deleteNote,
  }
}
