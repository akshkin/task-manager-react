import ERROR_ACTION_TYPES from "./error.types"

const { SET_ERROR, REMOVE_ERROR } = ERROR_ACTION_TYPES
const ERROR_INITIAL_STATE = []
  


export const errorReducer = (state = ERROR_INITIAL_STATE, action) => {
  const { type, payload } = action

  switch(type){
    case SET_ERROR:
      return [...state, payload]
    case REMOVE_ERROR:
      return state.filter(error => error.id !== payload)
    default:
      return state
  }
}