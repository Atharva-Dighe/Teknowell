import React, { useState } from "react";
function App()
{
  const[name,setName]=useState("");
  return(
    <div>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
      <h1>{name}</h1> 
      <button onClick={()=>setName("")}>Reset</button>
    </div>
  )
}
export default App;