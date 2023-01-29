import USER_ACTION_TYPES from "./user.types"


const { AUTH, AUTH_FAIL, LOGOUT, GET_PROFILE, UPDATE_PROFILE, DELETE_PROFILE, UPLOAD_AVATAR } = USER_ACTION_TYPES

// const defaultUser = {
//   name: "Jane Smith",
//   email: "jane@gmail.com",
//   password: "1234567",
//   age: 20,
//   _id: "63c4595dd7846b805698e104",
//   tokens: [
//             {
//                 token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M0NTk1ZGQ3ODQ2YjgwNTY5OGUxMDQiLCJpYXQiOjE2NzM4MTIzMTh9.bQRwCvrFVLnM3pm_f4rIK2WJs0PTFwHqLkRQ2SqJI50",
//                 _id: "63c4595ed7846b805698e108"
//             }
//         ],
// }

const USER_INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  isloading: true,
  isAuthenticated: false
}

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action
  switch(type){
    case AUTH:
      localStorage.setItem("user", JSON.stringify(payload))
      return {
        ...state,
        currentUser: payload,
        isAuthenticated: true,
        isLoading: false
      }
    case AUTH_FAIL:
    case LOGOUT:
    case DELETE_PROFILE:
      localStorage.removeItem("user")
      return { ...state, currentUser: null, isAuthenticated: false, isLoading: false}
    case GET_PROFILE:
      return {...state,  currentUser: payload,  isAuthenticated: true, isLoading: false}
    case UPDATE_PROFILE:
      return {...state,  currentUser: payload,  isAuthenticated: true, isLoading: false}
    case UPLOAD_AVATAR:
      return{...state, currentUser: {...state.user, avatar: payload}}
    default:
      return state
  }
}

