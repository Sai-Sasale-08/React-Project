import React from 'react'
import { auth } from '../Services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'


export const PrivetRoute = ({children}) => {

    const[user]=useAuthState(auth)
    if(!user)
    {
        return  <Navigate to={'/login'}></Navigate>
    }
  return children
    
}


