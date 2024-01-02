import {useState} from 'react';
import SignUpForm from './components/signupForm';
import Authenticate from './components/Authenticate';
import './App.css'

function App() {
const [token, setToken] = useState(null);


  return (
    <>
      <SignUpForm setToken={setToken}/>
      { token && 
      <Authenticate token = {token}/>
      }
    </>
  )
}

export default App
