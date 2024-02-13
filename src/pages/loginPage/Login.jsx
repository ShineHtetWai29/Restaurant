import React, {useState} from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaGooglePlus } from "react-icons/fa"
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div id='outerDiv'>
      <div id='innerDiv'>
          <p id='myTitle'>LOGIN INTO YOUR ACCOUNT</p>
          <p id='mySubtitle'>Login using Social Networks</p>
          <div id='logoBox'>
            <FaSquareTwitter id='logoTwitter'/>
            <FaFacebook id='logoFb'/>
            <FaGooglePlus id='logoGoogle'/>
          </div>
          <label for='inputEmail'>Email</label>
          <br />
          <input 
          type='email' 
          id='inputEmail'
          value={email} // Bind value to state for controlled input
          onChange={(event) => setEmail(event.target.value)}>
          </input>
          <br />
          <label for='inputPassword'>Password</label>
          <br />
          <input 
          type='password' 
          id='inputPassword'
          value={password} 
          onChange={(event) => setPassword(event.target.value)}>
          </input>
          <br />
          <div id='btnLoginBox'>
            <button id='btnLogin' onClick={() => {console.log('Email = ' + email + '\n' + 'Password = ' + password); setEmail(''); setPassword('');}}>Login</button>
          </div>
          <br />
          <div id='signUpBox'>
            Don't have an account? <a href='/signup' id='signUpLink'>Sign Up</a>
          </div>
      </div>

    </div>
  )
}

export default Login
