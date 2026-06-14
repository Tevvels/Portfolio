import React, { useState } from 'react'
import { Link, NavLink, Route, Router, Routes } from 'react-router-dom'
import '../Styles/Navigation.css'
function Navigation({className}) {
    const [isActive,setIsActive] = useState(false);

  return (
    <div className={`${className} nav`}>
    
        <NavLink className={`nav-Item`} to="/">home</NavLink>
        <NavLink className={`nav-Item`} to="/MyWork">Work</NavLink>
        <NavLink className={`nav-Item`} to="/contact">Contact</NavLink>
   
    </div>
  )
}

export default Navigation