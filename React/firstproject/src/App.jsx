import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() 
{
  return(
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
         
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App