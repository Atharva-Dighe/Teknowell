import React, { useState } from 'react'

const Counter=()=> {
    const [cnt,setCount]=useState(0);
    function inc()
    {
        if(cnt>0)
            setCount(cnt+1)
        if(cnt>10)
            setCount(0)
    }
    function dec()
    {
        if(cnt>0)
            
    }
  return (
    <div>
        <h1>Counter:{cnt}</h1>
        <button onClick={()=>setCount(cnt+1)}> Increment</button>
        <button onClick={()=>setCount(cnt-1)}>Decrement</button>
    </div>
  )
}

export default Counter