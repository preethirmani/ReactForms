import {useState} from 'react';
import SignUpForm from './components/signupForm.jsx';
import Authenticate from './components/Authenticate.jsx';
import './App.css'

function App() {
const [token, setToken] = useState(null);


  return (
    <>
      <SignUpForm setToken={setToken}/>   
      <Authenticate token = {token}/>
    </>
  )
}

export default App
