import React from "react";
import {useState} from 'react';
import {API_SIGNUP} from '../Constants.js'

const SignUpForm = ({ setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
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
      console.log(json);
      console.log(json.token);
      setToken(json.token);
      

    } catch(error) {
      console.log(error);
      setError(error.message);
    }
    
  }

  return(
    <>
      <h2>SignUp</h2>
      {error && <p> {error} </p>}
      <form onSubmit={handleSubmit}>
        <label>UserName : {''}
          <input type="text" value={username} 
          onChange={(e) => setUserName(e.target.value)}/>
        </label> <br />

        <label> Password : {''}
          <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label> <br />

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm;