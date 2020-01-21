import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pane from '../../components/Pane'
import {
  useNotesDispatch,
  postNotes,
} from '../../contexts/NotesContext'

const StyledInputText = styled.input`
  margin-bottom: 16px;
`

function Create() {
  const notesDispatch = useNotesDispatch()
  const [noteData, setNoteData] = React.useState({
    title: '',
    content: ''
  })

  const onTitleChange = (e) => {
    const nd =  { ...noteData }
    nd.title = e.target.value
    setNoteData({ ...nd })
  }

  const onContentChange = (e) => {
    const nd =  { ...noteData }
    nd.content = e.target.value
    setNoteData({ ...nd })
  }

  return (
    <div>
      <h1>The Create Notes page</h1>
      <Pane width="100%">
        <StyledInputText
          value={noteData.title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <StyledInputText
          value={noteData.content}
          placeholder="Content"
          onChange={onContentChange}
        />
        <button type="button" onClick={() => postNotes(notesDispatch, noteData)}>
          Save
        </button>
      </Pane>
      <Link to="/">
        <button>Back to Index</button>
      </Link>
    </div>
  )
}

export default Create
