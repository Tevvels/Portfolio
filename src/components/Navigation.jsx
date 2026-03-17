import React, { useState } from 'react'
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom'
import '../Styles/Navigation.css'
function Navigation() {
    const [isActive,setIsActive] = useState(false);

  return (
    <div className='Navigation'>
    
        <NavLink className={`NavigationItem`} to="/">home</NavLink>
        <NavLink className={`NavigationItem`} to="/MyWork">Work</NavLink>
        <NavLink className={`NavigationItem`} to="/contact">Contact</NavLink>
   
    </div>
  )
}

export default Navigation