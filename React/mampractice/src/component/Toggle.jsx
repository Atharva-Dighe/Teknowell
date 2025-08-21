import React, { useState } from 'react'

function Toggle() {
    const [state,setState]=useState('ON');
    function toggle()
    {
        (state=='ON')?setState('OFF'):setState('ON')
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Toggle