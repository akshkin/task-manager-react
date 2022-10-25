import ERROR_ACTION_TYPES from "./error.types"
import {nanoid} from "nanoid"

const { SET_ERROR, REMOVE_ERROR } = ERROR_ACTION_TYPES

export const setError = (message) => dispatch => {
  const id = nanoid()
  dispatch({ type: SET_ERROR, payload: {
    message,
    id
  } })

  setTimeout(() => {
    dispatch({ type: REMOVE_ERROR, payload: id})
  }, 5000)
}