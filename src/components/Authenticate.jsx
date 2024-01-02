import React from "react";
import {useState} from 'react';

import { API_AUTHENTICATE } from "../Constants";

const Authenticate = (props) => {
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const [userName, setUserName] = useState(null);

 async function handleClick(e) {
  console.log('CLicked');
  console.log('props.token',props.token);
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
      console.log(result);
      setSuccessMessage(result.message);
      setUserName(result.data.username);

  }catch(error) {
    console.log(error);
    setError(error.message);
  }
 }

  return(
    <>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{userName} {successMessage}</p>}
      <button onClick={handleClick}>AuthenticateToken!!</button>
    </>
  )

}

export default Authenticate;