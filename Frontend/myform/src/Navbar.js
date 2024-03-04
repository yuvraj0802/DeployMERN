import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='navdiv'>
          {/* <NavLink to="/" className="nav-style">Home</NavLink> */}
          <NavLink to="/" className="Navlink">Create Post</NavLink>
          <NavLink to="/AllPost" className="Navlink">All Post</NavLink>
        </div>
    </div>
  )
}
