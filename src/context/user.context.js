import { useState, createContext } from "react";
import axios from "axios"
export const UserContext = createContext()

export function UserProvider({ children }){

  const [currentUser, setCurrentUser] = useState(null)

  const url = "http://localhost:3003"
  function signIn(user){
    axios.post(url, user)
    setCurrentUser(user)
  }

  const value={}

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
