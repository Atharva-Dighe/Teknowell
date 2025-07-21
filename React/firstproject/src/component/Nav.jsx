import React from 'react'
import './Nav.css'
function Nav() {
  return (
    <div className='navbar'>
        <div className='logo'>
          <img src="https://www.teknowell.in/assets/img/Teknowell%20logo-new.webp" className='logo-img' alt="Logo" />
        </div>
        <div className='menu'>
          <p><a href="">Home</a></p>
          <p><a href="">About</a></p>
          <p><a href="">Contact</a></p>
        </div>
    </div>
  )
}

export default Nav