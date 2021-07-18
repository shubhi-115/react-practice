import React,{useState} from 'react';
import './App.css'
const App = ()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword] = useState('');
    const [passwordWant,setPasswordWant]=useState(true);
    return(
        <div className="container">
        <input
        type="text" placeholder="Enter your username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input
        type={passwordWant===true ? 'text': 'password'} placeholder="Enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <h2>{username}</h2>
        <h3>{passwordWant===true ? password : '*'.repeat(password.length)}</h3>
        <button onClick={(e)=>setPasswordWant(!passwordWant)}>Show/Hide your password</button>
        </div>
    )
}
export default App;