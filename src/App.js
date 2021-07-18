import React from 'react';
import Random from './components/Random_v1'
import Tag from './components/Tag_v1'
import './App.css'
const App = () =>{
    return(
   <div>
       <h1>Love you Anand</h1>
   <div className="main-container">
    <Random/>
    <Tag/>
   </div>
   </div>
    )
}
export default App;