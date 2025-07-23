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
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
    </div>
  )
}

export default Nav