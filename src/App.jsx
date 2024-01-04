import {useState} from 'react';
import SignupForm from './components/SignupForm.jsx';
import Authenticate from './components/Authenticate.jsx';
import './App.css'

function App() {
const [token, setToken] = useState(null);


  return (
    <>
      <SignupForm setToken={setToken} />
      <Authenticate token = {token}/>
      
    </>
  )
}

export default App
