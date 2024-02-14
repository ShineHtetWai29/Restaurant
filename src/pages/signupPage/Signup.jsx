import React, {useState} from 'react'
import './signup.css'

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
   <>
    <p id='myTitle'>Create an account</p>
    <div id='firstDiv'>
      <div id='firstNameDiv'>
        <label for='inputFirstName'>First Name</label>
        <br />
        <input 
        type='text' 
        id='inputFirstName'
        value={firstName} // Bind value to state for controlled input
        onChange={(event) => setFirstName(event.target.value)}>
        </input>
      </div>
      <div id='lastNameDiv'>
        <label for='inputLastName'>Last Name</label>
        <br />
        <input 
        type='text' 
        id='inputLastName'
        value={lastName} // Bind value to state for controlled input
        onChange={(event) => setLastName(event.target.value)}>
        </input>
      </div>
    </div>
    <div id='secDiv'>
      <div id='emailDiv'>
        <label for='inputEmailSignup'>Email</label>
        <br />
        <input 
        type='text' 
        id='inputEmailSignup'
        value={email} // Bind value to state for controlled input
        onChange={(event) => setEmail(event.target.value)}>
        </input>
      </div>
      <div id='phoneDiv'>
        <label for='inputPhone'>Phone</label>
        <br />
        <input 
        type='text' 
        id='inputPhone'
        value={phone} // Bind value to state for controlled input
        onChange={(event) => setPhone(event.target.value)}>
        </input>
      </div>
    </div>
    <div id='thirdDiv'>
      <div id='passwordDiv'>
        <label for='inputPasswordSignup'>Password</label>
        <br />
        <input 
        type='password' 
        id='inputPasswordSignup'
        value={password} // Bind value to state for controlled input
        onChange={(event) => setPassword(event.target.value)}>
        </input>
      </div>
      <div id='confirmPasswordDiv'>
        <label for='inputConfirmPassword'>Confirm Password</label>
        <br />
        <input 
        type='password' 
        id='inputConfirmPassword'
        value={confirmPassword} // Bind value to state for controlled input
        onChange={(event) => setConfirmPassword(event.target.value)}>
        </input>
      </div>
    </div>
    <div id='fourthDiv'>
        <label for='address'>Address</label>
        <br />
        <input 
        type='text'
        id='inputAddress'
        value={address} // Bind value to state for controlled input
        onChange={(event) => setAddress(event.target.value)}>
        </input>
    </div>
    
    <div id='btnSignupBox'>
            <button id='btnSignup' onClick={() => {console.log('First Name : ' + firstName + '\nLast Name : ' + lastName + '\nEmail : ' + email + '\nPhone : ' + phone  + '\nPassword : ' + password  + '\nConfirm Password : ' + confirmPassword  + '\nAddress : ' + address); setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setPassword(''); setConfirmPassword(''); setAddress('');}}>Signup</button>
          </div>
          <br />
          <div id='loginBox'>
            Already have an account? <a href='/' id='LoginLink'>Login</a> here
          </div>
   </>
  )
  
  
}

export default Signup
