import React from "react";
import {useState} from 'react';
import {API_SIGNUP} from '../Constants.js';
import '../index.css';

const SignupForm = ({ setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [sucessMessage, setSuccessMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
     if(!username || !password) {
      setError('Please enter username and password!')
    } else {
      try{
        console.log('Username:', username);
        console.log('Password:', password);
        console.log(API_SIGNUP);
        const response = await fetch(API_SIGNUP, 
          {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            username , password
          })
        });
        const json = await response.json();
        setToken(json.token);
        setSuccessMessage(`${username} created!! Please authenticate user...`)
        clearError();
      } catch(error) {
        console.log(error);
        setError(error.message);
      }
    } 
  }

  const clearError = () => {
    setError(null);
  }

  return(
    <>
      <h2>SignUp</h2>
      {error && <p className="errorMessage">{error}</p>}
      {sucessMessage && <p className="successMessage">{sucessMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>UserName : {''}
          <input type="text" value={username}
           minLength={8} 
          onChange={(e) => {
            setSuccessMessage(null);
            setUserName(e.target.value)}}/>
        </label> <br />

        <label> Password : {''}
          <input type="password" value={password} 
             minLength={8}
            onChange={(e) => setPassword(e.target.value)}/>
        </label> <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default SignupForm;
