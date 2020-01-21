import {
  FETCH_NOTES_BEGIN,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_ERROR,
  POST_NOTES_BEGIN,
  POST_NOTES_SUCCESS,
  POST_NOTES_ERROR,
} from './actions'

export const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  items: null,
}

export function reducer (state, action) {
  switch(action.type) {
    case FETCH_NOTES_BEGIN:
      return { ...state, ...initialState, loading: true }
    case FETCH_NOTES_SUCCESS:
      return { ...state, ...initialState, items: action.payload }
    case FETCH_NOTES_ERROR:
      return { ...state, ...initialState, errorMsg: action.payload }
    case POST_NOTES_BEGIN:
      return { ...state, loading: true, error: false, errorMsg: '' }
    case POST_NOTES_SUCCESS:
      console.log({ ...state })
      const newNotes = [...state.items, action.payload]
      return { ...state, loading: false, error: false, errorMsg: '', items: [...newNotes] }
    case POST_NOTES_ERROR:
      return { ...state, loading: false, error: true, errorMsg: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
