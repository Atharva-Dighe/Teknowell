import React from 'react'
import './Nav.css'
import { Link } from '@mui/material'
function Nav(props) 
{
  return(
    <div className='navbar'>
        <div className='logo'>
          <img src="https://www.teknowell.in/assets/img/Teknowell%20logo-new.webp" className='logo-img' alt="Logo" />
        </div>
        <div className='menu'>
          <Link to={"/"}><p>Home</p></Link>
          <Link to={"/about"}><p>About</p></Link>
          <Link to={"/contact"}><p>Contact</p></Link>
        </div>
    </div>
  )
}

export default Nav