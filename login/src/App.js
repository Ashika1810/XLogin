import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errormsg, setErrorMsg] =useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username==="user" && password==="password"){
      setIsValid(true);
    }
    else{
      setErrorMsg("Invalid username or password");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login Page</h1>
      {isValid ? (`Welcome, ${username}!`) : 
      ( <div>
        <p>{errormsg}</p>
        <form onSubmit={handleSubmit}>
        <label for="username">Username:</label>
        <input 
        type="text" 
        id="username"
        placeholder='username' 
        value={username} 
        onChange={(e)=>setUsername(e.target.value)}
        required />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <br />
        <button type='submit'>Submit</button>
      </form>
      </div>)}
    </div>
  );
      
}

export default App;
