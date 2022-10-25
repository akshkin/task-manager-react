import TASK_ACTION_TYPES from "./task.types"

const { START_LOADING, END_LOADING, FETCH_ALL_TASKS, FETCH_BY_SEARCH, CREATE_TASK, UPDATE_TASK, DELETE_TASK} = TASK_ACTION_TYPES

const TASK_INITIAL_STATE = {
  isLoading: true,
  tasks: []
}

export const taskReducer = (state = TASK_INITIAL_STATE, action) => {
  const {type, payload} = action
  switch(type){
    case START_LOADING:
      return { ...state, isLoading: true}
    case END_LOADING:
      return {...state, isLoading: false}
    case FETCH_ALL_TASKS:
      return { ...state, tasks: payload}
    case CREATE_TASK:
      return {...state, tasks: [...state.tasks, payload]}
    case UPDATE_TASK:
      return {...state, tasks: state.tasks.map(task => task._id === payload._id ? payload : task)}
    case DELETE_TASK:
      return {...state, tasks: state.tasks.filter(task => task._id !== payload)}
    default:      
      return state
  }
  
}