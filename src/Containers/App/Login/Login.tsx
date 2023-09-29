import React from 'react'
import "./Login.css"
import { Button } from '@mui/material';
import { auth, provider } from '../../../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
const signIn = () => {
  //do clever google login
  signInWithPopup(auth, provider).catch((error) => alert(error));
};

  return (
    <div className='login'>

      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg" alt="" />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  )
}

export default Login
