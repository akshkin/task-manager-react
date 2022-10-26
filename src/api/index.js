import axios from "axios"

const API = axios.create({baseUrl: "https://vivacious-squid.cyclic.app"})

API.interceptors.request.use(req => {
  if(localStorage.getItem("user")){
    req.headers.authorization = JSON.parse(localStorage.getItem("user")).token
  }
  return req
})

export const fetchTasks = () => API.get(`/api/tasks`)

export const createTask = newTask => API.post(`/api/tasks`, newTask)

export const updateTask = (id, updatedPost) => API.patch(`/api/tasks/${id}`, updatedPost)

export const deleteTask = id => API.delete(`/api/tasks/${id}`)

export const signIn = formFields => API.post(`/api/users/signin`, formFields)

export const signUp = formFields => API.post(`/api/users/signup`, formFields)

export const signOut = () => API.post("/api/users/signout")

export const getProfile = () => API.get("/api/users/profile")

export const updateProfile = (updatedProfile) => API.patch("/api/users/profile", updatedProfile)

export const deleteProfile = () => API.delete("/api/users/profile")
