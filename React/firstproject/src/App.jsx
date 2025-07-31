import React from 'react'
// import Nav from '../../f_project/src/component/Nav'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../../f_project/src/component/Home'
// import About from './component/About'
// import Contact from './component/Contact'
import FormHandling from './FormHandling'
import UserTable from './UserTable'
function App() 
{
  return(
    <div>
      {/* // <BrowserRouter>
      // <Nav/>
      //   <Routes>
      //     <Route path="/" element={<Home/>} />
      //     <Route path="/about" element={<About/>} />
      //     <Route path="/contact" element={<Contact/>} />
      //   </Routes>
      // </BrowserRouter> */}
      <FormHandling/>
      <UserTable/>
    </div>
  )
}


export default App