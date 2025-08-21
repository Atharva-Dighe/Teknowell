import React, { useState } from 'react'
import User from './User';

function App() 
{
  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[email,setEmail]=useState("");
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <input type="number" value={age} onChange={(e)=>setName(e.target.value)} />
      <br />
      <input type="email" value={email} onChange={(e)=>setName(e.target.value)} />
      
    </div>
  )
}

export default App