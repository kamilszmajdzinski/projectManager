import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
  return (
    <div className = 'header'>
      <p>Project management system </p>
      <div className ='menu'>
        <Link to = '/projects' className = 'link'> Active Projects </Link>
        <Link to = '/addProject' className = 'link'> Add new project</Link>
        <Link to = '/' className = 'link'> <i class="fas fa-sign-out-alt" ></i>Sign out</Link>
     </div>
    </div>
  )
}

export default Header