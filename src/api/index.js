import axios from "axios"

const API = axios.create({baseUrl: "http://localhost:5000"})

API.interceptors.request.use(req => {
  if(localStorage.getItem("user")){
    req.headers.authorization = JSON.parse(localStorage.getItem("user")).token
  }
  return req
})

export const fetchTasks = () => API.get(`/tasks`)

export const createTask = newTask => API.post(`/tasks`, newTask)

export const updateTask = (id, updatedPost) => API.patch(`/tasks/${id}`, updatedPost)

export const deleteTask = id => API.delete(`/tasks/${id}`)

export const signIn = formFields => API.post(`/users/signin`, formFields)

export const signUp = formFields => API.post(`/users/signup`, formFields)

export const signOut = () => API.post("/users/signout")

export const getProfile = () => API.get("/users/profile")

export const updateProfile = (updatedProfile) => API.patch("/users/profile", updatedProfile)

export const deleteProfile = () => API.delete("/users/profile")
