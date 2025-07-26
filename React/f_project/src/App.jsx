import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'

function App() {
  return (
    <>

    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
    
    
    
    
    
    
    
    </>
  )
}

export default App