import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '../../components/Paper'
import Pane from '../../components/Pane'
import { fetchNotes, useNotesState, useNotesDispatch } from '../../contexts/NotesContext'

function NoteList({ notes }) {
  return notes.map((note, idx) => {
    return (
      <Paper key={idx} margin="0 8px">
        <strong>{note.title}</strong>
        <p>{note.content}</p>
      </Paper>
    )
  })
}

function List() {
  const {
    loading,
    error,
    errorMsg,
    items
  } = useNotesState()
  const notesDispatch = useNotesDispatch()

  React.useEffect(() => {
    fetchNotes(notesDispatch)
  }, [fetchNotes])
  
  return (
    <div>
      <h1>The List of Notes</h1>
      <Pane
        width="flex"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        margin="16px 0"
      >
        {loading && <div>Fetching....</div>}
        {!loading && items && <NoteList notes={items} />}
      </Pane>

      <Link to="/create">
        <button>Create Notes</button>
      </Link>
    </div>
  )
}

export default List
