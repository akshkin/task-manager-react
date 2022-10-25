import TASK_ACTION_TYPES from "./task.types"
import * as api from "../../api"
import ERROR_ACTION_TYPES from "../error/error.types"

const { START_LOADING, END_LOADING, FETCH_ALL_TASKS, FETCH_BY_SEARCH, CREATE_TASK, UPDATE_TASK, DELETE_TASK } = TASK_ACTION_TYPES
const { SET_ERROR } = ERROR_ACTION_TYPES

export const getTasks = () => async(dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.fetchTasks()
    dispatch({type: FETCH_ALL_TASKS, payload: data})
    dispatch({type: END_LOADING})
  }catch(error){
    console.log(error)
    dispatch({type: SET_ERROR, payload: error})
  }
}

export const createTask = newTask => async(dispatch) => {
  try {
    dispatch({type: START_LOADING})
    const { data } = await api.createTask(newTask)
    dispatch({type: CREATE_TASK, payload: data})
    dispatch({type: END_LOADING})
  }catch(error){
    console.log(error)
    dispatch({type: SET_ERROR, payload: error})
  }
}

export const updateTask = (id, task) => async(dispatch) => {
  try {
    const { data } = await api.updateTask(id, task)
    dispatch({type: UPDATE_TASK, payload: data})
  }catch(error){
    console.log(error)
    dispatch({type: SET_ERROR, payload: error})
  }
}

export const deleteTask = id => async(dispatch) => {
  try { 
    await api.deleteTask(id)
    dispatch({type: DELETE_TASK, payload: id})
  }catch(error){
    console.log(error)
    dispatch({type: SET_ERROR, payload: error})
  }
}