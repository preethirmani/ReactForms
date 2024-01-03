import React from "react";
import {useState} from 'react';
import { API_AUTHENTICATE } from "../Constants";
import '../index.css';

const Authenticate = (props) => {
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const [userName, setUserName] = useState(null);

  async function handleClick(e) {
    if(props.token) {
        try{
          const response = await fetch(API_AUTHENTICATE,
            {
              method : 'GET',
              headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer:${props.token}`
              },
          });
          const result = await response.json();
          setSuccessMessage(result.message);
          setUserName(result.data.username);
          clearError();
        }catch(error) {
        console.log(error);
        setError(error.message);
        }
      }else{
        console.log('token is null');
        setError('User should be signed up before authenticaing!!');
      }
  }

  const clearError = () => {
    setError(null);
  }
  return(
    <>
      <h2>Authenticate</h2>
      {error && <p className="errorMessage">{error}</p>}
      {successMessage && <p className="successMessage">Hello {userName} {successMessage}!</p>}
      <button onClick={handleClick}>AuthenticateToken!!</button>
    </>
  )

}

export default Authenticate;