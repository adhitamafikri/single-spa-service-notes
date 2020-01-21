import React from 'react'
import 'regenerator-runtime'
import { API_URL } from '../../config/api'
import {
  FETCH_NOTES_BEGIN,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  POST_NOTES_BEGIN,
  POST_NOTES_SUCCESS,
  POST_NOTES_ERROR,
} from './actions'
import { initialState, reducer } from './reducer'

const NotesStateContext = React.createContext()
const NotesDispatchContext = React.createContext()

export function NotesProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <NotesStateContext.Provider value={state}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesStateContext.Provider>
  )
}

export function useNotesState() {
  const context = React.useContext(NotesStateContext)
  if (context === undefined) {
    throw new Error('useNotesState must be used inside NotesProvider')
  }

  return context
}

export function useNotesDispatch() {
  const context = React.useContext(NotesDispatchContext)
  if (context === undefined) {
    throw new Error('useNotesDispatch must be used inside NotesProvider')
  }

  return context
}

/** 
 * @desc Fetching notes from api
 */
export async function fetchNotes(dispatch) {
  dispatch({ type: FETCH_NOTES_BEGIN })
  try {
    const URL = `${API_URL}/notes`
    const response = await fetch(URL)
    if (response) {
      const json = await response.json()
      const payload = json.result
      dispatch({ type: FETCH_NOTES_SUCCESS, payload })
    } else {
      const payload = 'Failed to get response'
      dispatch({ type: FETCH_NOTES_ERROR, payload })
      throw new Error('Failed to get response')
    }
  } catch (error) {
    const payload = 'Something went wrong'
    dispatch({ type: FETCH_NOTES_ERROR, payload })
    throw error
  }
}

/** 
 * @desc Post note to api
 */
export async function postNotes(dispatch, data) {
  dispatch({ type: POST_NOTES_BEGIN })
  try {
    const URL = `${API_URL}/notes`
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ ...data }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response) {
      dispatch({ type: POST_NOTES_SUCCESS, payload: { ...data } })
    } else {
      const payload = 'Failed to post'
      dispatch({ type: POST_NOTES_ERROR, payload })
      throw new Error('Failed to post')
    }
  } catch (error) {
    const payload = 'Something went wrong'
    dispatch({ type: POST_NOTES_ERROR, payload })
    throw error
  }
}
