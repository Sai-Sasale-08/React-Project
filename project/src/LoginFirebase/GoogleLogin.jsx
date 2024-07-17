import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../Services/firebase'

const GoogleLogin = () => {


    const handleclick=()=>{
        signInWithPopup(auth , provider)
        .then((res)=>{console.log(res)
          alert("LOGIN SUCCESS")
        })
        .catch((err)=>{console.log(err)})
    }

  return (
    <div>
      <GoogleButton onClick={handleclick}></GoogleButton>
    </div>
  )
}

export default GoogleLogin
