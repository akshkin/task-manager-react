import React from 'react'
import {useSelector} from "react-redux"
import { Navigate } from 'react-router-dom'

function PrivateRoute({user,children}) {
  const { isLoading} = useSelector(state => state.user)
 
  return (
    (user && !isLoading) ? children : <Navigate to="/auth"/>
  )   
}

export default PrivateRoute